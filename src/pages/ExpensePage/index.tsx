import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { thunkGetExpenses } from 'store/expense/thunks'

import { ExpenseType } from 'types/expense'
import { IExpensePage } from './types'

const mapDispatchToProps = {
  getExpenses: thunkGetExpenses,
}

const ExpensePage: React.FC<IExpensePage> = ({ getExpenses }) => {
  React.useEffect(() => {
    getExpenses(ExpenseType.ACTUAL)
  }, [])

  return <div>test</div>
}

export default compose(
  connect<IExpensePage>(
    null,
    mapDispatchToProps,
  ),
)(ExpensePage)
