import { createReducer } from 'redux-act'

import {
  actionRegistrationRequest,
  actionRegistrationSuccess,
  actionRegistrationFail,
  actionLoginRequest,
  actionLoginSuccess,
  actionLoginFail,
} from './actions'

const initialState = {
  isLoading: false,
  isLogin: false,
  user: null,
}

const authReducer = createReducer(
  {
    [actionRegistrationRequest]: state => ({
      ...state,
      isLoading: true,
    }),

    [actionRegistrationSuccess]: state => ({
      ...state,
      isLoading: false,
    }),

    [actionRegistrationFail]: state => ({
      ...state,
      isLoading: false,
    }),

    [actionLoginRequest]: state => ({
      ...state,
      isLoading: true,
    }),

    [actionLoginSuccess]: (state, user) => ({
      ...state,
      user,
      isLoading: false,
      isLogin: true,
    }),

    [actionLoginFail]: state => ({
      ...state,
      isLoading: false,
      isLogin: false,
    }),
  },
  initialState,
)

export default authReducer
