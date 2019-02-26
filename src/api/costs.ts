import { API_URL } from 'constants'
import { request } from './utils'

export const getCosts = (token: string) =>
  request({
    method: 'get',
    url: `${API_URL.V1}/costs`,
    token,
  })

export const editCosts = (token: string, id: string, data: object) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/costs/update/${id}`,
    token,
    data,
  })

export const createCost = (token: string, data: object) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/costs/create`,
    token,
    data,
  })

export const deleteCost = (token: string, id: string) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/costs/remove/${id}`,
    token,
  })
