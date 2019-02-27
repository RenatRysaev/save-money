export interface IErrorBoundaryProps {
  children: any
  fallbackComponent: JSX.Element
}

export interface IErrorBoundaryState {
  hasError: boolean
}
