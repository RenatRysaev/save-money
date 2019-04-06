import { IExpense } from 'types/expense'
import { IModal } from 'types/modal'

export interface IExpensePageProps {
  getExpenses: (expenseType?: string) => void
  openModal: (modal: IModal) => void
  isEmptyExpense: boolean
  plannedExpense: IExpense[]
  actualExpense: IExpense[]
}
