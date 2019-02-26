import { createAction } from 'redux-act'
import { userType } from 'types/user'

export const actionRegistrationRequest = createAction('REGISTRATION_REQUEST')
export const actionRegistrationSuccess = createAction<userType>(
  'REGISTRATION_SUCCESS',
  (user) => user,
)
export const actionRegistrationFail = createAction('REGISTRATION_FAIL')

export const actionLoginRequest = createAction('LOGIN_REQUEST')
export const actionLoginSuccess = createAction<userType>(
  'LOGIN_SUCCESS',
  (user) => user,
)
export const actionLoginFail = createAction('LOGIN_FAIL')

export const actionLogout = createAction('LOGOUT')
