import { IModal } from 'types/modal'

export interface ICreateIncomeProps {
  modal: IModal
  closeModal: (modalName: string) => void
  createIncome: (expense: object) => void
}
