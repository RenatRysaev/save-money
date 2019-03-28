import { registration, login, checkLogin } from './user'
import { getIncome, editIncome, createIncome, deleteIncome } from './income'
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
  editIncome,
  createIncome,
  deleteIncome,
  getExpenses,
  createExpense,
  removeExpense,
  updateExpense,
}

export default API
