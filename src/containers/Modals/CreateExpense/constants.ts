import { reduce } from 'lodash'

import { ExpenseKind, ExpenseType } from 'types/expense'
import { CURRENCY } from 'constants/currency'

export const expenseTypes = {
  PLANNED: {
    name: 'Planned',
    value: ExpenseType.PLANNED,
  },
  ACTUAL: {
    name: 'Actual',
    value: ExpenseType.ACTUAL,
  },
}

export const expenseKinds = {
  PLANNED: {
    name: 'Permanent',
    value: ExpenseKind.PERMANENT,
  },
  ACTUAL: {
    name: 'One-time',
    value: ExpenseKind.ONE_TIME,
  },
}
