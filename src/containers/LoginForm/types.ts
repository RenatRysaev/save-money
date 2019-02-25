export interface LoginFormProps {
  isLoadingAuth: boolean
  login: (name: string, password: string) => void
}
