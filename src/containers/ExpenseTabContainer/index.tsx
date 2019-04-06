import React from 'react'
import { connect } from 'react-redux'

import { thunkUpdateExpense } from 'store/expense/thunks'

import ListByKind from 'components/ListByKind/index'

import { ExpenseKind } from 'types/expense'
import { IExpenseTabContainerProps } from './types'

const mapDispatchToProps = {
  updateExpense: thunkUpdateExpense,
}

const ExpenseTabContainer: React.FC<IExpenseTabContainerProps> = ({
  expense,
  updateExpense,
}) => (
  <React.Fragment>
    <ListByKind
      items={expense}
      kind={ExpenseKind.PERMANENT}
      title="Permanent"
      onUpdate={updateExpense}
    />
    <ListByKind
      items={expense}
      kind={ExpenseKind.ONE_TIME}
      title="One-time"
      onUpdate={updateExpense}
    />
  </React.Fragment>
)

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseTabContainer)
