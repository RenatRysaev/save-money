import { toast } from 'react-toastify'

import API from 'api'

// import { actionCloseModal } from 'store/ui/actions'
import {
  actionGetExpenses,
  actionGetExpensesSucceed,
  actionGetExpensesFail,
  actionCreateExpense,
  actionCreateExpenseSucceed,
  actionCreateExpenseFail,
  actionUpdateExpense,
  actionUpdateExpenseSucceed,
  actionUpdateExpenseFail,
  actionRemoveExpense,
  actionRemoveExpenseSucceed,
  actionRemoveExpenseFail,
} from 'store/expense/actions'

import { ExpenseType, IExpense } from 'types/expense'

import { getToken } from 'utils'

// import { MODALS } from 'constants/modals'

export const thunkGetExpenses = (expenseType: ExpenseType) => async (
  dispatch,
) => {
  try {
    const token = getToken()
    dispatch(actionGetExpenses())

    const { data: expenses } = await API.getExpenses(token, expenseType)

    dispatch(actionGetExpensesSucceed(expenses))
  } catch (err) {
    dispatch(actionGetExpensesFail())
    toast.error('An error occurred while requesting expenses. Try later.')
  }
}

export const thunkCreateExpense = (expense: IExpense) => async (dispatch) => {
  try {
    const token = getToken()

    dispatch(actionCreateExpense())

    const { data: createdExpense } = await API.createExpense(token, expense)

    dispatch(actionCreateExpenseSucceed(createdExpense))
    // dispatch(actionCloseModal(MODALS.CREATE_INCOME.name))
    toast.success('Successful create')
  } catch (err) {
    dispatch(actionCreateExpenseFail())
    // dispatch(actionCloseModal(MODALS.CREATE_INCOME.name))
    toast.error('An error occurred while create expense. Try later.')
  }
}

export const thunkUpdateExpense = (expense: IExpense) => async (dispatch) => {
  try {
    const token = getToken()

    dispatch(actionUpdateExpense())

    const { data: updatedExpense } = await API.updateExpense(
      token,
      expense.id,
      expense,
    )

    dispatch(actionUpdateExpenseSucceed(updatedExpense))
    toast.success('Successful update')
  } catch (err) {
    dispatch(actionUpdateExpenseFail())
    toast.error('An error occurred while edit expense. Try later.')
  }
}

export const thunkRemoveExpense = (id: string) => async (dispatch) => {
  try {
    const token = getToken()

    dispatch(actionRemoveExpense())

    const { data: deletedExpense } = await API.deleteIncome(token, id)

    dispatch(actionRemoveExpenseSucceed(deletedExpense))
    toast.success('Successful delete')
  } catch (err) {
    dispatch(actionRemoveExpenseFail())
    toast.error('An error occurred while delete expense. Try later.')
  }
}