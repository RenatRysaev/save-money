import { push, replace } from 'connected-react-router'
import { toast } from 'react-toastify'

import API from 'api'
import { ROUTES } from 'constants/routes'
import { getToken, setToken, clearToken } from 'utils'
import { checkIsAuthPage } from './helpers'

import {
  actionRegistrationRequest,
  actionRegistrationSuccess,
  actionRegistrationFail,
  actionLoginRequest,
  actionLoginSuccess,
  actionLoginFail,
  actionLogout,
} from './actions'

export const thunkRegistration = ({ name, login, password }) => async (
  dispatch,
) => {
  try {
    dispatch(actionRegistrationRequest())

    const { data: user } = await API.registration(name, login, password)

    dispatch(actionRegistrationSuccess(user))
    dispatch(push(ROUTES.LOGIN.path))
    toast.success('Registration completed successfully')
  } catch (err) {
    dispatch(actionRegistrationFail())
    toast.error('Registration failed')
  }
}

export const thunkLogin = ({ login, password }) => async (dispatch) => {
  try {
    dispatch(actionLoginRequest())

    const { data: user } = await API.login(login, password)

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
  const isAuthPage = checkIsAuthPage()

  try {
    const token = getToken()
    const { data: user } = await API.checkLogin(token)

    dispatch(actionLoginSuccess(user))
    toast.success('Login successful')

    if (isAuthPage) {
      dispatch(replace(ROUTES.BUDGET.path))
    }
  } catch (err) {
    dispatch(actionLoginFail())

    if (!isAuthPage) {
      dispatch(replace(ROUTES.LOGIN.path))
      toast.error('Login failed')
    }
  }
}

export const thunkLogout = () => (dispatch) => {
  clearToken()

  dispatch(actionLogout())
  dispatch(push(ROUTES.LOGIN.path))
  toast.success('Logout successful')
}
