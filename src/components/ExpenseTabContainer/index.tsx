import React from 'react'

import ListByKind from 'components/ListByKind'

import { ExpenseKind } from 'types/expense'
import { IExpenseTabContainerProps } from './types'

const ExpenseTabContainer: React.FC<IExpenseTabContainerProps> = ({
  expense,
}) => (
  <React.Fragment>
    <ListByKind
      items={expense}
      kind={ExpenseKind.PERMANENT}
      title="Permanent"
    />
    <ListByKind items={expense} kind={ExpenseKind.ONE_TIME} title="One-time" />
  </React.Fragment>
)

export default ExpenseTabContainer
