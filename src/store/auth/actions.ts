import { createAction } from 'redux-act'

export const actionRegistrationRequest = createAction('REGISTRATION_REQUEST')
export const actionRegistrationSuccess = createAction<object>(
  'REGISTRATION_SUCCESS',
  (user) => user,
)
export const actionRegistrationFail = createAction('REGISTRATION_FAIL')

export const actionLoginRequest = createAction('LOGIN_REQUEST')
export const actionLoginSuccess = createAction<object>(
  'LOGIN_SUCCESS',
  (user) => user,
)
export const actionLoginFail = createAction('LOGIN_FAIL')

export const actionLogout = createAction('LOGOUT')
