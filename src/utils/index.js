import { ROUTES_WITHOUT_HEADER } from 'constants'

export const setToken = (token) => window.localStorage.setItem('token', token)

export const getToken = () => window.localStorage.getItem('token')

export const clearToken = () => setToken('')

export const isRenderHeader = () =>
  ROUTES_WITHOUT_HEADER.every((route) => route !== window.location.pathname)
