import React, { Component } from 'react'
import { string, bool, func, shape, objectOf } from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import size from 'lodash/size'
import map from 'lodash/map'

import { MODALS } from 'constants'

import {
  selectCostsEntitiesJS,
  selectIsLoadingCosts,
} from 'store/costs/selectors'

import {
  thunkGetCosts,
  thunkEditCost,
  thunkDeleteCost,
} from 'store/costs/thunks'
import { actionOpenModal } from 'store/ui/actions'

import Loader from 'components/Loader/index'
import PageTitle from 'components/PageTitle/index'
import CheckOnEmpty from 'components/CheckOnEmpty/index'
import PreviewCart from 'components/PreviewCart/index'
import Button from '@material-ui/core/Button'

import styles from './styles.module.scss'

const mapStateToProps = (state) => ({
  costs: selectCostsEntitiesJS(state),
  isLoadingCosts: selectIsLoadingCosts(state),
})

const mapDispatchToProps = {
  getCosts: thunkGetCosts,
  editCost: thunkEditCost,
  deleteCost: thunkDeleteCost,
  openModal: actionOpenModal,
}

interface CostsPageProps {
  costs: object
  getCosts: () => void
  openModal: (modalData: {}) => void
  isLoadingCosts: boolean
  editCost: (todoData) => void
  deleteCost: (id) => void
}

type costType = {
  id: string
  name: string
  sum: string
  description?: string
}

class CostsPage extends Component<CostsPageProps> {
  componentDidMount() {
    const { costs, getCosts } = this.props

    if (!size(costs)) {
      getCosts()
    }
  }

  handleOpenModal = () => {
    const { openModal } = this.props
    openModal(MODALS.CREATE_COST)
  }

  render() {
    const { costs, isLoadingCosts, editCost, deleteCost } = this.props

    return (
      <div className={styles.costsList}>
        <PageTitle>Planned cost</PageTitle>

        <div className={styles.createButtonContainer}>
          <Button
            onClick={this.handleOpenModal}
            variant="contained"
            color="primary"
          >
            Create cost
          </Button>
        </div>

        <Loader isLoading={isLoadingCosts}>
          <CheckOnEmpty
            listLength={size(costs)}
            fallbackContent={<p>Costs list is empty</p>}
          >
            {map(costs, (cost: costType, key) => (
              <PreviewCart
                key={key}
                id={key}
                name={cost.name}
                description={cost.description}
                sum={cost.sum}
                onEdit={editCost}
                onDelete={deleteCost}
              />
            ))}
          </CheckOnEmpty>
        </Loader>
      </div>
    )
  }
}

// CostsPage.propTypes = {
//   costs: objectOf(
//     shape({
//       id: string,
//       name: string,
//       sum: string,
//     }),
//   ),
//   isLoadingCosts: bool,
//   getCosts: func,
//   editCost: func,
//   deleteCost: func,
//   openModal: func,
// }

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(CostsPage)
