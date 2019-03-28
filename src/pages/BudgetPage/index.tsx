import React, { Fragment, Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import {
  selectIncomeEntitiesLength,
  selectIncomeTotalSum,
  selectIsLoadingIncome,
} from 'store/income/selectors'

import { thunkGetIncome } from 'store/income/thunks'

import { IBudgetPageProps } from './types'

const mapStateToProps = (state) => ({
  isLoadingIncome: selectIsLoadingIncome(state),
  incomeEntitiesLength: selectIncomeEntitiesLength(state),
  incomeTotalSum: selectIncomeTotalSum(state),
})

const mapDispatchToProps = {
  getIncome: thunkGetIncome,
}

class BudgetPage extends Component<IBudgetPageProps> {
  componentDidMount() {
    const { incomeEntitiesLength, getIncome } = this.props

    // if (!incomeEntitiesLength) {
    //   getIncome()
    // }
  }

  render() {
    const { isLoadingIncome, incomeTotalSum } = this.props

    return <Fragment>temp content</Fragment>
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(BudgetPage)
