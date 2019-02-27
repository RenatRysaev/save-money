import * as React from 'react'

import { IErrorBoundaryProps, IErrorBoundaryState } from './types'

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render() {
    const { hasError } = this.state
    const { children, fallbackComponent } = this.props

    return hasError ? fallbackComponent : children
  }
}

export default ErrorBoundary
