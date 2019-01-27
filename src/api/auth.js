import axios from 'axios'
import { API_URL } from 'constants'

export const registration = (name, password) =>
  axios({
    method: 'post',
    url: `${API_URL.V1}/reg`,
    data: {
      name,
      password,
    },
  })

export const login = (name, password) =>
  axios({
    method: 'post',
    url: `${API_URL.V1}/login`,
    data: {
      name,
      password,
    },
  })

export const checkLogin = (token) =>
  axios({
    method: 'post',
    url: `${API_URL.V1}/check-login`,
    headers: { Authorization: token },
  })
