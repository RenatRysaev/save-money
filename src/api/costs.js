import { API_URL } from 'constants'
import { request } from './utils'

export const getCosts = (token) =>
  request({
    method: 'get',
    url: `${API_URL.V1}/costs`,
    token,
  })
