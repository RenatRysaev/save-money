import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import authReducer from 'store/auth/reducers'
import costsReducer from 'store/costs/reducers'
import incomeReducer from 'store/income/reducers'
import uiReducer from 'store/ui/reducers'

const createRootReducer = (history) => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    costs: costsReducer,
    income: incomeReducer,
    ui: uiReducer,
  })

  const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') state = undefined // eslint-disable-line
    return appReducer(state, action)
  }

  return rootReducer
}

export default createRootReducer
