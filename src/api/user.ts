import { API_URL } from 'constants/api'
import { request } from './utils'

export const registration = (
  name: string,
  userLogin: string,
  password: string,
) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/registration`,
    data: {
      name,
      login: userLogin,
      password,
    },
  })

export const login = (userLogin: string, password: string) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/login`,
    data: {
      login: userLogin,
      password,
    },
  })

export const checkLogin = (token: string) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/check_login`,
    token,
  })
