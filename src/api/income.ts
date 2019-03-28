import { API_URL } from 'constants/api'
import { IIncome } from 'types/income'
import { request } from './utils'

export const createIncome = (token: string, income: IIncome) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/income/create`,
    token,
    data: income,
  })

export const getIncome = (token: string) =>
  request({
    method: 'get',
    url: `${API_URL.V1}/income`,
    token,
  })

export const updateIncome = (token: string, id: string, income: IIncome) =>
  request({
    method: 'patch',
    url: `${API_URL.V1}/income/${id}`,
    token,
    data: income,
  })

export const deleteIncome = (token: string, id: string) =>
  request({
    method: 'delete',
    url: `${API_URL.V1}/income/${id}`,
    token,
  })
