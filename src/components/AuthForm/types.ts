export interface IAuthFormProps {
  fields: Array<{ name: string; type: string; label: string }>
  fieldsInitialValues: { name: string; password: string }
  submitButtonText: string
  link: { path: string; text: string }
  validationSchema: any
  isLoading: boolean
  onSubmit: (values: any) => void
}
