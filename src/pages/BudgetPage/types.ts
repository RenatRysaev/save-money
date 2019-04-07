export interface IBudgetPageProps {
  getIncome: () => void
  getExpense: () => void
  totalSumOfPlannedExpense: number
  totalSumOfActualExpense: number
  totalSumOfIncome: number
  isEmptyIncomeList: boolean
  isEmptyExpenseList: boolean
  incomeCurrency: string
  expenseCurrency: string
}
