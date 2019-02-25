export interface RegFormProps {
  isLoadingAuth: boolean
  registration: (name: string, password: string) => void
}
