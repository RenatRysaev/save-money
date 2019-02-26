export interface IPreviewCartProps {
  name: string
  description: string
  sum: string
  id: string
  onEdit: (todoData: object) => void
  onDelete: (id: string | number) => void
}

export interface IPreviewCartState {
  isEditMode: boolean
}
