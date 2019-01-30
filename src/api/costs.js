import { API_URL } from 'constants'
import { request } from './utils'

export const getCosts = (token) =>
  request({
    method: 'get',
    url: `${API_URL.V1}/costs`,
    token,
  })

export const editCosts = (token, id, data) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/costs/update/${id}`,
    token,
    data,
  })
