import { ROUTES_WITHOUT_HEADER } from 'constants'

export const setToken = (token) => window.localStorage.setItem('token', token)

export const getToken = () => window.localStorage.getItem('token')

export const clearToken = () => setToken('')

export const isRenderHeader = () =>
  !ROUTES_WITHOUT_HEADER[window.location.pathname]

export const arrayToMap = (array: [], key: string): object =>
  array.reduce(
    (acc, item, index) => ({
      ...acc,
      [item[key] || index]: item,
    }),
    {},
  )
