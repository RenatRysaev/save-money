export interface ICostsPageProps {
  costs: object
  getCosts: () => void
  openModal: (modalData: {}) => void
  isLoadingCosts: boolean
  editCost: (todoData) => void
  deleteCost: (id) => void
}

export interface ICostType {
  id: string
  name: string
  sum: string
  description?: string
}
