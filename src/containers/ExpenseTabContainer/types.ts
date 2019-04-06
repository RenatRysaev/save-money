import { IExpense } from 'types/expense'

export interface IExpenseTabContainerProps {
  expense: IExpense[]
  updateExpense: (id: string, updateInfo: object) => void
}
