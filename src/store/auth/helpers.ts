import { ROUTES } from 'src/constants'

export const checkIsAuthPage = () =>
  [ROUTES.LOGIN.path, ROUTES.REGISTRATION.path].some(
    (path) => path === window.location.pathname,
  )
