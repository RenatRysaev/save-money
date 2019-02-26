import { ROUTES } from 'constants'

export const checkIsAuthPage = (): boolean =>
  [ROUTES.LOGIN.path, ROUTES.REGISTRATION.path].some(
    (path) => path === window.location.pathname,
  )
