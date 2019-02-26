export interface IRegFormProps {
  isLoadingAuth: boolean
  registration: (name: string, password: string) => void
}
