import { IIncome } from 'types/income'
import { IModal } from 'types/modal'

export interface IIncomePageProps {
  income: IIncome[]
  getIncome: () => void
  openModal: (modalData: IModal) => void
  updateIncome: (income: IIncome) => void
  removeIncome: (id: string) => void
}
