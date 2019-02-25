export type CreateCostProps = {
  isLoading: boolean
  createCost: (
    cost: { name: string; description?: string; sum: string | number },
  ) => void
}
