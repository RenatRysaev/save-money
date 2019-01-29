import { toast } from 'react-toastify'

import API from 'api'

import {
  actionCostsRequest,
  actionCostsRequestSucceed,
  actionCostsRequestFailed,
} from './actions'

export const thunkGetCosts = () => async (dispatch) => {
  try {
    dispatch(actionCostsRequest())

    const { data: costs } = await API.getCosts()

    dispatch(actionCostsRequestSucceed(costs))
  } catch (err) {
    dispatch(actionCostsRequestFailed())
    toast('An error occurred while requesting expenses. Try later.')
  }
}
