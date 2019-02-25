export interface PreviewCartProps {
  name: string
  description: string
  sum: string
  id: string
  onEdit: (todoData: object) => void
  onDelete: (id: string | number) => void
}

export interface PreviewCartState {
  isEditMode: boolean
}
