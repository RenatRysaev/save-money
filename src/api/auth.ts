import axios, { AxiosPromise } from 'axios'
import { API_URL } from 'constants'

export const registration = (name: string, password: string): AxiosPromise =>
  axios({
    method: 'post',
    url: `${API_URL.V1}/reg`,
    data: {
      name,
      password,
    },
  })

export const login = (name: string, password: string): AxiosPromise =>
  axios({
    method: 'post',
    url: `${API_URL.V1}/login`,
    data: {
      name,
      password,
    },
  })
