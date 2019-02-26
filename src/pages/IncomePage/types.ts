export interface IIncomePageProps {
  income: object
  getIncome: () => void
  openModal: (modalData: object) => void
  isLoadingIncome: boolean
  editIncome: (incomeData) => void
  deleteIncome: (id) => void
}

export interface IIncomeType {
  id: string
  name: string
  sum: string
  description?: string
}
