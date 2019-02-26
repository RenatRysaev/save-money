import React, { Fragment, Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import {
  selectCostsEntitiesLength,
  selectCostTotalSum,
  selectIsLoadingCosts,
} from 'store/costs/selectors'
import {
  selectIncomeEntitiesLength,
  selectIncomeTotalSum,
  selectIsLoadingIncome,
} from 'store/income/selectors'

import { thunkGetCosts } from 'store/costs/thunks'
import { thunkGetIncome } from 'store/income/thunks'

import PageTitle from 'components/PageTitle'
import TotalValue from 'components/TotalValue'

import { IBudgetPageProps } from './types'

const mapStateToProps = (state) => ({
  isLoadingCosts: selectIsLoadingCosts(state),
  isLoadingIncome: selectIsLoadingIncome(state),
  costsEntitiesLength: selectCostsEntitiesLength(state),
  incomeEntitiesLength: selectIncomeEntitiesLength(state),
  costTotalSum: selectCostTotalSum(state),
  incomeTotalSum: selectIncomeTotalSum(state),
})

const mapDispatchToProps = {
  getCosts: thunkGetCosts,
  getIncome: thunkGetIncome,
}

class BudgetPage extends Component<IBudgetPageProps> {
  componentDidMount() {
    const {
      costsEntitiesLength,
      incomeEntitiesLength,
      getCosts,
      getIncome,
    } = this.props

    if (!costsEntitiesLength) {
      getCosts()
    }

    if (!incomeEntitiesLength) {
      getIncome()
    }
  }

  render() {
    const {
      isLoadingCosts,
      isLoadingIncome,
      costTotalSum,
      incomeTotalSum,
    } = this.props

    return (
      <Fragment>
        <PageTitle>Budget</PageTitle>
        <TotalValue
          name="Total costs"
          value={costTotalSum}
          isLoading={isLoadingCosts}
        />
        <TotalValue
          name="Total income"
          value={incomeTotalSum}
          isLoading={isLoadingIncome}
        />
      </Fragment>
    )
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(BudgetPage)
