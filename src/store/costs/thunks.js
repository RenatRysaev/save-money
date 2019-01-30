import { toast } from 'react-toastify'

import API from 'api'

import { getToken } from 'utils'

import {
  actionCostsRequest,
  actionCostsRequestSucceed,
  actionCostsRequestFailed,
  actionCostEditFailed,
  actionCostEditRequest,
  actionCostsEditSucceed,
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

export const thunkEditCost = ({ name, sum, date, description, id }) => async (
  dispatch,
) => {
  try {
    const token = getToken()
    const cost = { name, sum, date, description }

    dispatch(actionCostEditRequest())

    const { data: updatedCost } = await API.editCosts(token, id, cost)

    dispatch(actionCostsEditSucceed(updatedCost))
    toast.success('Successful update')
  } catch (err) {
    dispatch(actionCostEditFailed())
    toast.error('An error occurred while edit costs. Try later.')
  }
}
