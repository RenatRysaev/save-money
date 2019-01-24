import { push, replace } from 'connected-react-router'

import API from 'api/index'
import { setToken, getToken } from 'utils/index'

import {
  actionRegistrationRequest,
  actionRegistrationSuccess,
  actionRegistrationFail,
  actionLoginRequest,
  actionLoginSuccess,
  actionLoginFail,
} from './actions'

export const thunkRegistration = (name, password) => async dispatch => {
  try {
    dispatch(actionRegistrationRequest())

    const { data: user } = await API.registration(name, password)

    dispatch(actionRegistrationSuccess(user))
    dispatch(push('/'))
  } catch (err) {
    dispatch(actionRegistrationFail())
  }
}

export const thunkLogin = (name, password) => async dispatch => {
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

export const thunkCheckLogin = () => async dispatch => {
  try {
    const token = getToken()

    if (!token) {
      dispatch(replace('/login'))
      return
    }

    const response = await API.checkLogin(token)

    dispatch(actionLoginSuccess(response.user))
  } catch (err) {
    dispatch(actionLoginFail())
    dispatch(replace('/login'))
  }
}
