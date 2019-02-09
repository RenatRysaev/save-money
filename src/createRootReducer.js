import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import authReducer from 'store/auth/reducers'
import costsReducer from 'store/costs/reducers'
import incomeReducer from 'store/income/reducers'
import uiReducer from 'store/ui/reducers'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    costs: costsReducer,
    income: incomeReducer,
    ui: uiReducer,
  })

export default createRootReducer
