import { IExpense } from 'types/expense'

export interface IExpensePageProps {
  getExpenses: (expenseType?: string) => void
  isEmptyExpense: boolean
  plannedExpense: IExpense[]
  actualExpense: IExpense[]
}
