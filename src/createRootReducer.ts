import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import authReducer from 'store/auth/reducers'

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
  } as any)

export default createRootReducer
