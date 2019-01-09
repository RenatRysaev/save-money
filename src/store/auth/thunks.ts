import { push } from 'connected-react-router'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

import API from 'api'
import { setToken } from 'utils'

import {
  actionRegistrationRequest,
  actionRegistrationSuccess,
  actionRegistrationFail,
  actionLoginRequest,
  actionLoginSuccess,
  actionLoginFail,
} from './actions'

export const thunkRegistration = (name: string, password: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  try {
    dispatch(actionRegistrationRequest())

    const { data: user } = await API.registration(name, password)

    dispatch(actionRegistrationSuccess(user))
    dispatch(push('/login'))
  } catch (err) {
    dispatch(actionRegistrationFail())
  }
}

export const thunkLogin = (name: string, password: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  try {
    dispatch(actionLoginRequest())

    const { data: user } = await API.login(name, password)

    setToken(user.token)

    dispatch(actionLoginSuccess(user))
    dispatch(push('/budget'))
  } catch (err) {
    dispatch(actionLoginFail())
  }
}
