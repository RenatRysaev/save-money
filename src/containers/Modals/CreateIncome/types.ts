import { IModal } from 'types/modal'
import { IIncome } from 'types/income'

export interface ICreateIncomeProps {
  modal: IModal
  closeModal: (modalName: string) => void
  createIncome: (expense: IIncome) => void
}
