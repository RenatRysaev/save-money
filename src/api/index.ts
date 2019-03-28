import { registration, login, checkLogin } from './user'
import { getIncome, updateIncome, createIncome, deleteIncome } from './income'
import {
  getExpenses,
  createExpense,
  removeExpense,
  updateExpense,
} from './expense'

const API = {
  registration,
  login,
  checkLogin,
  getIncome,
  updateIncome,
  createIncome,
  deleteIncome,
  getExpenses,
  createExpense,
  removeExpense,
  updateExpense,
}

export default API
