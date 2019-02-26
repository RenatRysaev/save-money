export interface IBudgetPageProps {
  isLoadingCosts: boolean
  isLoadingIncome: boolean
  costTotalSum: number
  incomeTotalSum: number
  costsEntitiesLength: number
  incomeEntitiesLength: number
  getCosts: () => void
  getIncome: () => void
}