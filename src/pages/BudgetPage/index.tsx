import React, { Fragment, Component } from 'react'
import { bool, number, func } from 'prop-types'
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

import PageTitle from 'components/PageTitle/index'
import TotalValue from 'components/TotalValue/index'

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

interface BudgetPageProps {
  isLoadingCosts: boolean
  isLoadingIncome: boolean
  costTotalSum: number
  incomeTotalSum: number
  costsEntitiesLength: number
  incomeEntitiesLength: number
  getCosts: () => void
  getIncome: () => void
}

class BudgetPage extends Component<BudgetPageProps> {
  componentDidMount() {
    const {
      costsEntitiesLength,
      incomeEntitiesLength,
      getCosts,
      getIncome,
    } = this.props

    if (!costsEntitiesLength) getCosts()
    if (!incomeEntitiesLength) getIncome()
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

// BudgetPage.propTypes = {
//   isLoadingCosts: bool,
//   isLoadingIncome: bool,
//   costsEntitiesLength: number.isRequired,
//   incomeEntitiesLength: number.isRequired,
//   costTotalSum: number.isRequired,
//   incomeTotalSum: number.isRequired,
//   getCosts: func.isRequired,
//   getIncome: func.isRequired,
// }

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(BudgetPage)
