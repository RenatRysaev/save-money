import * as React from 'react'

import ListByKind from 'components/ListByKind'

import { ExpenseKind } from 'types/expense'
import { IPlannedExpenseProps } from './types'

const PlannedExpense: React.FC<IPlannedExpenseProps> = ({ expense }) => {
  return (
    <React.Fragment>
      <ListByKind
        items={expense}
        kind={ExpenseKind.PERMANENT}
        title="Permanent"
      />
      <ListByKind
        items={expense}
        kind={ExpenseKind.ONE_TIME}
        title="One-time"
      />
    </React.Fragment>
  )
}

export default PlannedExpense
