import { API_URL } from 'src/constants'
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

export const createCost = (token, data) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/costs/create`,
    token,
    data,
  })

export const deleteCost = (token, id) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/costs/remove/${id}`,
    token,
  })
