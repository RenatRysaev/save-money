import { API_URL } from 'constants/api'
import { request } from './utils'

export const getIncome = (token: string) =>
  request({
    method: 'get',
    url: `${API_URL.V1}/income`,
    token,
  })

export const editIncome = (token: string, id: string, data: object) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/income/update/${id}`,
    token,
    data,
  })

export const createIncome = (token: string, data: object) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/income/create`,
    token,
    data,
  })

export const deleteIncome = (token: string, id: string) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/income/remove/${id}`,
    token,
  })
