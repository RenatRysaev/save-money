import { Moment } from 'moment'

export enum ExpenseType {
  ACTUAL = 'actual',
  PLANNED = 'planned',
}

export enum ExpenseKind {
  ONE_TIME = 'one_time',
  PERMANENT = 'permanent',
}

export interface IExpense {
  id?: string
  name: string
  sum: number | string
  date: string | Moment
  type: ExpenseType
  kind: ExpenseKind
  currency: string
}
