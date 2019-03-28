import { toast } from 'react-toastify'
import uuid from 'uuid'

import API from 'api'

import { getToken } from 'utils'
import { MODALS } from 'constants/modals'

import { actionCloseModal } from 'store/ui/actions'
import {
  actionIncomeRequest,
  actionIncomeRequestSucceed,
  actionIncomeRequestFailed,
  actionIncomeEditFailed,
  actionIncomeEditRequest,
  actionIncomeEditSucceed,
  actionCreateIncomeSucceed,
  actionCreateIncomeFailed,
  actionCreateIncomeRequest,
  actionDeleteIncomeSucceed,
  actionDeleteIncomeRequest,
  actionDeleteIncomeFailed,
} from './actions'

export const thunkGetIncome = () => async (dispatch) => {
  try {
    const token = getToken()
    dispatch(actionIncomeRequest())

    const { data: income } = await API.getIncome(token)

    dispatch(actionIncomeRequestSucceed(income))
  } catch (err) {
    dispatch(actionIncomeRequestFailed())
    toast.error('An error occurred while requesting income. Try later.')
  }
}

export const thunkEditIncome = ({ name, sum, description, id }) => async (
  dispatch,
) => {
  try {
    const token = getToken()
    const income = { name, sum, description }

    dispatch(actionIncomeEditRequest())

    const { data: updatedIncome } = await API.editIncome(token, id, income)

    dispatch(actionIncomeEditSucceed(updatedIncome))
    toast.success('Successful update')
  } catch (err) {
    dispatch(actionIncomeEditFailed())
    toast.error('An error occurred while edit income. Try later.')
  }
}

export const thunkCreateIncome = ({ name, description, sum }) => async (
  dispatch,
) => {
  try {
    const token = getToken()
    const income = { name, sum, description, id: uuid.v4() }

    dispatch(actionCreateIncomeRequest())

    const { data: createdIncome } = await API.createIncome(token, income)

    dispatch(actionCreateIncomeSucceed(createdIncome))
    dispatch(actionCloseModal(MODALS.CREATE_INCOME.name))
    toast.success('Successful create')
  } catch (err) {
    dispatch(actionCreateIncomeFailed())
    dispatch(actionCloseModal(MODALS.CREATE_INCOME.name))
    toast.error('An error occurred while create income. Try later.')
  }
}

export const thunkDeleteIncome = (id) => async (dispatch) => {
  try {
    const token = getToken()

    dispatch(actionDeleteIncomeRequest())

    const { data: deletedIncome } = await API.deleteIncome(token, id)

    dispatch(actionDeleteIncomeSucceed(deletedIncome))
    toast.success('Successful delete')
  } catch (err) {
    dispatch(actionDeleteIncomeFailed())
    toast.error('An error occurred while delete income. Try later.')
  }
}
