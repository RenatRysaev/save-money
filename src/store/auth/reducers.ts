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
}

const authReducer = createReducer<typeof initialState>({}, initialState)

authReducer.on(actionRegistrationRequest, state => ({
  ...state,
  isLoading: true,
}))

authReducer.on(actionRegistrationSuccess, state => ({
  ...state,
  isLoading: false,
}))

authReducer.on(actionRegistrationFail, state => ({
  ...state,
  isLoading: false,
}))

authReducer.on(actionLoginRequest, state => ({
  ...state,
  isLoading: true,
}))

authReducer.on(actionLoginSuccess, state => ({
  ...state,
  isLoading: false,
  isLogin: true,
}))

authReducer.on(actionLoginFail, state => ({
  ...state,
  isLoading: false,
  isLogin: false,
}))

export default authReducer
