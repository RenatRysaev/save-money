export interface ICartProps {
  id: string
  name: string
  sum: number
  currency: string
  date: string
  onUpdate: (id: string, updateInfo: object) => void
  onDelete: (id: string) => void
}
