import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import authReducer from 'store/auth/reducers'
import costsReducer from 'store/costs/reducers'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    costs: costsReducer,
  })

export default createRootReducer
