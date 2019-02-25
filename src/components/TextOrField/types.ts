export type TextOrFieldProps = {
  isEditMode: boolean
  name: string
  value: string | number
  type?: string
  onChange: (event: any) => void
  text: string
  textClassName?: string | any
  fieldClassName?: string
  autoFocus?: boolean
  label?: string
  error?: boolean
}
