import React from 'react'
import { connect } from 'react-redux'

import { thunkUpdateExpense, thunkRemoveExpense } from 'store/expense/thunks'

import ListByKind from 'components/ListByKind/index'

import { ExpenseKind } from 'types/expense'
import { IExpenseTabContainerProps } from './types'

const mapDispatchToProps = {
  updateExpense: thunkUpdateExpense,
  removeExpense: thunkRemoveExpense,
}

const ExpenseTabContainer: React.FC<IExpenseTabContainerProps> = ({
  expense,
  updateExpense,
  removeExpense,
}) => (
  <React.Fragment>
    <ListByKind
      items={expense}
      kind={ExpenseKind.PERMANENT}
      title="Permanent"
      onUpdate={updateExpense}
      onDelete={removeExpense}
    />
    <ListByKind
      items={expense}
      kind={ExpenseKind.ONE_TIME}
      title="One-time"
      onUpdate={updateExpense}
      onDelete={removeExpense}
    />
  </React.Fragment>
)

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseTabContainer)
