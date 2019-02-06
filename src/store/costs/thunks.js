import { toast } from 'react-toastify'
import uuid from 'uuid'

import API from 'api'

import { getToken } from 'utils'
import { MODALS } from 'constants'

import { actionCloseModal } from 'store/ui/actions'
import {
  actionCostsRequest,
  actionCostsRequestSucceed,
  actionCostsRequestFailed,
  actionCostEditFailed,
  actionCostEditRequest,
  actionCostsEditSucceed,
  actionCreateCostSucceed,
  actionCreateCostFailed,
  actionCreateCostRequest,
} from './actions'

export const thunkGetCosts = () => async (dispatch) => {
  try {
    const token = getToken()
    dispatch(actionCostsRequest())

    const { data: costs } = await API.getCosts(token)

    dispatch(actionCostsRequestSucceed(costs))
  } catch (err) {
    dispatch(actionCostsRequestFailed())
    toast.error('An error occurred while requesting costs. Try later.')
  }
}

export const thunkEditCost = ({ name, sum, description, id }) => async (
  dispatch,
) => {
  try {
    const token = getToken()
    const cost = { name, sum, description }

    dispatch(actionCostEditRequest())

    const { data: updatedCost } = await API.editCosts(token, id, cost)

    dispatch(actionCostsEditSucceed(updatedCost))
    toast.success('Successful update')
  } catch (err) {
    dispatch(actionCostEditFailed())
    toast.error('An error occurred while edit costs. Try later.')
  }
}

export const thunkCreateCost = ({ name, description, sum }) => async (
  dispatch,
) => {
  try {
    const token = getToken()
    const cost = { name, sum, description, id: uuid.v4() }

    dispatch(actionCreateCostRequest())

    const { data: createdCost } = await API.createCost(token, cost)

    dispatch(actionCreateCostSucceed(createdCost))
    dispatch(actionCloseModal(MODALS.CREATE_COST.name))
    toast.success('Successful create')
  } catch (err) {
    dispatch(actionCreateCostFailed())
    dispatch(actionCloseModal(MODALS.CREATE_COST.name))
    toast.error('An error occurred while create costs. Try later.')
  }
}
