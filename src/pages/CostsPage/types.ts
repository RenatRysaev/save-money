export interface CostsPageProps {
  costs: object
  getCosts: () => void
  openModal: (modalData: {}) => void
  isLoadingCosts: boolean
  editCost: (todoData) => void
  deleteCost: (id) => void
}

export type costType = {
  id: string
  name: string
  sum: string
  description?: string
}
