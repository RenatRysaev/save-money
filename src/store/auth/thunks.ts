import { push } from 'connected-react-router'

import API from 'api'
import { setToken } from 'utils'

import {
  actionRegistrationRequest,
  actionRegistrationSuccess,
  actionRegistrationFail,
} from './actions'

export const thunkRegistration = (name: string, password: string) => async (
  dispatch: any,
) => {
  try {
    dispatch(actionRegistrationRequest())

    const { data: user } = await API.registration(name, password)

    setToken(user.token)

    dispatch(actionRegistrationSuccess(user))

    dispatch(push('/budget'))
  } catch (err) {
    dispatch(actionRegistrationFail())
  }
}
