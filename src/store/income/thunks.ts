import { toast } from 'react-toastify'

import API from 'api'

import { getToken } from 'utils'

import { IIncome } from 'types/income'

import {
  actionCreateIncome,
  actionCreateIncomeSucceed,
  actionCreateIncomeFail,
  actionGetIncome,
  actionGetIncomeSucceed,
  actionGetIncomeFail,
  actionUpdateIncome,
  actionUpdateIncomeSucceed,
  actionUpdateIncomeFail,
  actionRemoveIncome,
  actionRemoveIncomeSucceed,
  actionRemoveIncomeFail,
} from './actions'

export const thunkCreateIncome = (income: IIncome) => async (dispatch) => {
  try {
    const token = getToken()

    dispatch(actionCreateIncome())

    const { data: createdIncome } = await API.createIncome(token, income)

    dispatch(actionCreateIncomeSucceed(createdIncome))
    toast.success('Successful create')
  } catch (err) {
    dispatch(actionCreateIncomeFail())
    toast.error('An error occurred while create income. Try later.')
  }
}

export const thunkGetIncome = () => async (dispatch) => {
  try {
    const token = getToken()
    dispatch(actionGetIncome())

    const { data: income } = await API.getIncome(token)

    dispatch(actionGetIncomeSucceed(income))
  } catch (err) {
    dispatch(actionGetIncomeFail())
    toast.error('An error occurred while requesting income. Try later.')
  }
}

export const thunkUpdateIncome = (income: IIncome) => async (dispatch) => {
  try {
    const token = getToken()

    dispatch(actionUpdateIncome())

    const { data: updatedIncome } = await API.updateIncome(
      token,
      income.id,
      income,
    )

    dispatch(actionUpdateIncomeSucceed(updatedIncome))
    toast.success('Successful update')
  } catch (err) {
    dispatch(actionUpdateIncomeFail())
    toast.error('An error occurred while edit income. Try later.')
  }
}

export const thunkRemoveIncome = (id) => async (dispatch) => {
  try {
    const token = getToken()

    dispatch(actionRemoveIncome())

    const { data: deletedIncomeId } = await API.deleteIncome(token, id)

    dispatch(actionRemoveIncomeSucceed(deletedIncomeId))
    toast.success('Successful delete')
  } catch (err) {
    dispatch(actionRemoveIncomeFail())
    toast.error('An error occurred while delete income. Try later.')
  }
}
