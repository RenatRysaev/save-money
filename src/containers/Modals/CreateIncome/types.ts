export type CreateIncomeProps = {
  isLoading: boolean
  createIncome: (cost: { name: string; sum: string | number }) => void
}
