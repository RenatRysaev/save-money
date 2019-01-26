import { ROUTES } from 'constants'

export const isAuthPage = () =>
  [ROUTES.LOGIN.path, ROUTES.REGISTRATION.path].some(
    (path) => path === window.location.pathname,
  )
