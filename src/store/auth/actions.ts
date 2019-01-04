import { createAction } from 'redux-act'

export const actionRegistrationRequest = createAction('REGISTRATION_REQUEST')
export const actionRegistrationSuccess = createAction(
  'REGISTRATION_SUCCESS',
  user => user,
)
export const actionRegistrationFail = createAction('REGISTRATION_FAIL')
