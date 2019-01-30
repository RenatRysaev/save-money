import { API_URL } from 'constants'
import { request } from './utils'

export const registration = (name, password) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/reg`,
    data: {
      name,
      password,
    },
  })

export const login = (name, password) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/login`,
    data: {
      name,
      password,
    },
  })

export const checkLogin = (token) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/check-login`,
    token,
  })
