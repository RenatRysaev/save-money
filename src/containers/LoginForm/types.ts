export interface ILoginFormProps {
  isLoadingAuth: boolean
  login: (name: string, password: string) => void
}
