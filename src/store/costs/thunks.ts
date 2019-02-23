import { toast } from 'react-toastify'
import uuid from 'uuid'

import API from 'api/index'

import { getToken } from 'utils/index'
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
  actionDeleteCostSucceed,
  actionDeleteCostRequest,
  actionDeleteCostFailed,
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

export const thunkDeleteCost = (id) => async (dispatch) => {
  try {
    const token = getToken()

    dispatch(actionDeleteCostRequest())

    const { data: deletedCost } = await API.deleteCost(token, id)

    dispatch(actionDeleteCostSucceed(deletedCost))
    toast.success('Successful delete')
  } catch (err) {
    dispatch(actionDeleteCostFailed())
    toast.error('An error occurred while delete costs. Try later.')
  }
}
