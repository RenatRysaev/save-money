import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import size from 'lodash/size'
import map from 'lodash/map'

import { MODALS } from 'constants/modals'

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

import Loader from 'components/Loader'
import CheckOnEmpty from 'components/CheckOnEmpty'
import PreviewCart from 'components/PreviewCart'
import Button from '@material-ui/core/Button'

import { ICostsPageProps, ICostType } from './types'

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

class CostsPage extends Component<ICostsPageProps> {
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
            {map(costs, (cost: ICostType, key) => (
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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(CostsPage)
