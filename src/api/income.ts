import { API_URL } from 'src/constants'
import { request } from './utils'

export const getIncome = (token) =>
  request({
    method: 'get',
    url: `${API_URL.V1}/income`,
    token,
  })

export const editIncome = (token, id, data) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/income/update/${id}`,
    token,
    data,
  })

export const createIncome = (token, data) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/income/create`,
    token,
    data,
  })

export const deleteIncome = (token, id) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/income/remove/${id}`,
    token,
  })
