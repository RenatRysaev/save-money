import { ROUTES } from 'constants/routes'

export const checkIsAuthPage = (): boolean =>
  [ROUTES.LOGIN.path, ROUTES.REGISTRATION.path].some(
    (path) => path === window.location.pathname,
  )
