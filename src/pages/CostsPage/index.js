import React, { Component } from 'react'
import { hot } from 'react-hot-loader/root'
import { string, bool, func, shape, objectOf } from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import size from 'lodash/size'
import map from 'lodash/map'
import noop from 'lodash/noop'

import { MODALS } from 'constants'

import {
  selectCostsEntitiesJS,
  selectIsLoadingCosts,
} from 'store/costs/selectors'

import { thunkGetCosts, thunkEditCost } from 'store/costs/thunks'
import { actionOpenModal } from 'store/ui/actions'

import Loader from 'components/Loader'
import PageTitle from 'components/PageTitle'
import CheckOnEmpty from 'components/CheckOnEmpty'
import CostPreviewCart from 'components/CostPreviewCart'
import Button from '@material-ui/core/Button'

import styles from './styles.module.scss'

const mapStateToProps = (state) => ({
  costs: selectCostsEntitiesJS(state),
  isLoadingCosts: selectIsLoadingCosts(state),
})

const mapDispatchToProps = {
  getCosts: thunkGetCosts,
  editCost: thunkEditCost,
  openModal: actionOpenModal,
}

class CostsPage extends Component {
  componentDidMount() {
    const { getCosts } = this.props
    getCosts()
  }

  handleOpenModal = () => {
    const { openModal } = this.props
    openModal(MODALS.CREATE_COST)
  }

  render() {
    const { costs, isLoadingCosts, editCost } = this.props

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
            {map(costs, (cost, key) => (
              <CostPreviewCart
                key={key}
                id={key}
                name={cost.name}
                description={cost.description}
                sum={cost.sum}
                date={cost.date}
                onEdit={editCost}
                onDelete={noop}
              />
            ))}
          </CheckOnEmpty>
        </Loader>
      </div>
    )
  }
}

CostsPage.propTypes = {
  costs: objectOf(
    shape({
      id: string,
      name: string,
      sum: string,
      date: string,
    }),
  ),
  isLoadingCosts: bool,
  getCosts: func,
  editCost: func,
  openModal: func,
}

export default compose(
  hot,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(CostsPage)
