export interface IncomePageProps {
  income: object
  getIncome: () => void
  openModal: (modalData: object) => void
  isLoadingIncome: boolean
  editIncome: (incomeData) => void
  deleteIncome: (id) => void
}

export type incomeType = {
  id: string
  name: string
  sum: string
  description?: string
}
