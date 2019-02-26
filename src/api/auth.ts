import { API_URL } from 'constants'
import { request } from './utils'

export const registration = (name: string, password: string) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/reg`,
    data: {
      name,
      password,
    },
  })

export const login = (name: string, password: string) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/login`,
    data: {
      name,
      password,
    },
  })

export const checkLogin = (token: string) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/check-login`,
    token,
  })
