import { fromJS } from 'immutable'
import { createReducer } from 'redux-act'

import {
  actionRegistrationRequest,
  actionRegistrationSuccess,
  actionRegistrationFail,
  actionLoginRequest,
  actionLoginSuccess,
  actionLoginFail,
} from './actions'

export const initialState = fromJS({
  isLoading: false,
  isLogin: false,
  user: null,
})

const authReducer = createReducer({}, initialState)

authReducer.on(actionRegistrationRequest, (state) =>
  state.set('isLoading', true),
)

authReducer.on(actionRegistrationSuccess, (state) =>
  state.set('isLoading', false),
)

authReducer.on(actionRegistrationFail, (state) => state.set('isLoading', false))

authReducer.on(actionLoginRequest, (state) => state.set('isLoading', true))

authReducer.on(actionLoginSuccess, (state, user) =>
  state
    .set('isLoading', false)
    .set('isLogin', true)
    .set('user', fromJS(user)),
)

authReducer.on(actionLoginFail, (state) => state.set('isLoading', false))

export default authReducer
