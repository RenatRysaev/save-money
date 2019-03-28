export interface IAuthFormProps {
  fields: Array<{ name: string; type: string; label: string }>
  fieldsInitialValues: any
  submitButtonText: string
  link: { path: string; text: string }
  validationSchema: any
  isLoading: boolean
  onSubmit: (values: any) => void
}
