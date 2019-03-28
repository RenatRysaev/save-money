import { API_URL } from 'constants/api'
import { request } from './utils'
import { IExpense, ExpenseType } from 'types/expense'

export const getExpenses = (token: string, expenseType: ExpenseType) =>
  request({
    method: 'get',
    url: `${API_URL.V1}/expenses?type=${expenseType}`,
    token,
  })

export const createExpense = (token, expense: IExpense) =>
  request({
    method: 'post',
    url: `${API_URL.V1}/expenses/create`,
    token,
    data: expense,
  })

export const updateExpense = (token, id, expense) =>
  request({
    method: 'patch',
    url: `${API_URL.V1}/expenses/:${id}`,
    token,
    data: expense,
  })

export const removeExpense = (token, id, expense) =>
  request({
    method: 'delete',
    url: `${API_URL.V1}/expenses/:${id}`,
    token,
  })
