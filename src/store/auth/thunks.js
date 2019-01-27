import { push, replace } from 'connected-react-router'
import { toast } from 'react-toastify'

import API from 'api'
import { ROUTES } from 'constants'
import { setToken, getToken, clearToken } from 'utils'
import { isAuthPage } from './helpers'

import {
  actionRegistrationRequest,
  actionRegistrationSuccess,
  actionRegistrationFail,
  actionLoginRequest,
  actionLoginSuccess,
  actionLoginFail,
  actionLogout,
} from './actions'

export const thunkRegistration = (name, password) => async (dispatch) => {
  try {
    dispatch(actionRegistrationRequest())

    const { data: user } = await API.registration(name, password)

    dispatch(actionRegistrationSuccess(user))
    dispatch(push(ROUTES.LOGIN.path))
    toast.success('Registration completed successfully')
  } catch (err) {
    dispatch(actionRegistrationFail())
    toast.error('Registration failed')
  }
}

export const thunkLogin = (name, password) => async (dispatch) => {
  try {
    dispatch(actionLoginRequest())

    const { data: user } = await API.login(name, password)

    setToken(user.token)

    dispatch(actionLoginSuccess(user))
    dispatch(push(ROUTES.BUDGET.path))
    toast.success('Login successful')
  } catch (err) {
    dispatch(actionLoginFail())
    toast.error('Login failed')
  }
}

export const thunkCheckLogin = () => async (dispatch) => {
  try {
    const token = getToken()

    if (isAuthPage()) return

    if (!token) {
      dispatch(replace(ROUTES.LOGIN.path))
      toast.error('Login failed')
      return
    }

    const { data: user } = await API.checkLogin(token)

    dispatch(actionLoginSuccess(user))

    if (isAuthPage()) {
      dispatch(replace(ROUTES.BUDGET.path))
    }

    toast.success('Login successful')
  } catch (err) {
    dispatch(actionLoginFail())
    dispatch(replace(ROUTES.LOGIN.path))
    toast.error('Login failed')
  }
}

export const thunkLogout = () => (dispatch) => {
  clearToken()

  dispatch(actionLogout())
  dispatch(push(ROUTES.LOGIN.path))
}
