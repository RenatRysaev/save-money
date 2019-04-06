import { IModal } from 'types/modal'
import { IExpense } from 'types/expense'

export interface ICreateExpenseProps {
  modal: IModal
  closeModal: (modalName: string) => void
  createExpense: (expense: IExpense) => void
}
