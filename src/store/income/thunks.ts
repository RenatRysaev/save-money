import { toast } from 'react-toastify'

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

export const thunkCreateIncome = (income: IIncome) => async (
  dispatch,
  getState,
  api,
) => {
  try {
    const token = getToken()

    dispatch(actionCreateIncome())

    const { data: createdIncome } = await api.createIncome(token, income)

    dispatch(actionCreateIncomeSucceed(createdIncome))
    toast.success('Successful create')
  } catch (err) {
    dispatch(actionCreateIncomeFail())
    toast.error('An error occurred while create income. Try later.')
  }
}

export const thunkGetIncome = () => async (dispatch, getState, api) => {
  try {
    const token = getToken()
    dispatch(actionGetIncome())

    const { data: income } = await api.getIncome(token)

    dispatch(actionGetIncomeSucceed(income))
  } catch (err) {
    dispatch(actionGetIncomeFail())
    toast.error('An error occurred while requesting income. Try later.')
  }
}

export const thunkUpdateIncome = (id, income: IIncome) => async (
  dispatch,
  getState,
  api,
) => {
  try {
    const token = getToken()

    dispatch(actionUpdateIncome())

    const { data: updatedIncome } = await api.updateIncome(token, id, income)

    dispatch(actionUpdateIncomeSucceed(updatedIncome))
    toast.success('Successful update')
  } catch (err) {
    dispatch(actionUpdateIncomeFail())
    toast.error('An error occurred while edit income. Try later.')
  }
}

export const thunkRemoveIncome = (id) => async (dispatch, getState, api) => {
  try {
    const token = getToken()

    dispatch(actionRemoveIncome())

    const { data: deletedIncomeId } = await api.deleteIncome(token, id)

    dispatch(actionRemoveIncomeSucceed(deletedIncomeId))
    toast.success('Successful delete')
  } catch (err) {
    dispatch(actionRemoveIncomeFail())
    toast.error('An error occurred while delete income. Try later.')
  }
}
