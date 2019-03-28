import { registration, login, checkLogin } from './user'
import { getCosts, editCosts, createCost, deleteCost } from './costs'
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
  getCosts,
  editCosts,
  createCost,
  deleteCost,
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
