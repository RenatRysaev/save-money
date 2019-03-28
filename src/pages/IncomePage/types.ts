export interface IIncomePageProps {
  income: object
  getIncome: () => void
  openModal: (modalData: object) => void
  isLoadingIncome: boolean
  updateIncome: (income) => void
  removeIncome: (id) => void
}

export interface IIncomeType {
  id: string
  name: string
  sum: string
  description?: string
}
