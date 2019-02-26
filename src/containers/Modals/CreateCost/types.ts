import { ICostType } from 'types/cost'

export interface ICreateCostProps {
  isLoading: boolean
  createCost: (cost: ICostType) => void
}
