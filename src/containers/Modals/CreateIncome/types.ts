import { IIncomeType } from 'types/income'

export interface ICreateIncomeProps {
  isLoading: boolean
  createIncome: (income: IIncomeType) => void
}
