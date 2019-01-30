import { toast } from 'react-toastify'

import API from 'api'

import { getToken } from 'utils'

import {
  actionCostsRequest,
  actionCostsRequestSucceed,
  actionCostsRequestFailed,
} from './actions'

export const thunkGetCosts = () => async (dispatch) => {
  try {
    const token = getToken()
    dispatch(actionCostsRequest())

    const { data: costs } = await API.getCosts(token)

    dispatch(actionCostsRequestSucceed(costs))
  } catch (err) {
    dispatch(actionCostsRequestFailed())
    toast('An error occurred while requesting expenses. Try later.')
  }
}
