import { fromJS, Map } from 'immutable'
import { createReducer } from 'redux-act'

import {
  actionRegistrationRequest,
  actionRegistrationSuccess,
  actionRegistrationFail,
  actionLoginRequest,
  actionLoginSuccess,
  actionLoginFail,
  actionLogout,
} from './actions'

const initialState = Map({
  isLoading: false,
  isLogin: false,
  user: null,
})

const authReducer = createReducer(
  {
    [actionRegistrationRequest]: (state) => state.set('isLoading', true),

    [actionRegistrationSuccess]: (state) => state.set('isLoading', false),

    [actionRegistrationFail]: (state) => state.set('isLoading', false),

    [actionLoginRequest]: (state) => state.set('isLoading', true),

    [actionLoginSuccess]: (state, user) =>
      state
        .set('isLoading', false)
        .set('isLogin', true)
        .set('user', fromJS(user)),

    [actionLoginFail]: (state) =>
      state.set('isLoading', false).set('isLogin', false),

    [actionLogout]: (state) => state.set('isLogin', false).set('user', Map({})),
  },
  initialState,
)

export default authReducer
