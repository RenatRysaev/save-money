import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import authReducer from 'store/auth/reducers'
import incomeReducer from 'store/income/reducers'
import expenseReducer from 'store/expense/reducers'
import uiReducer from 'store/ui/reducers'

const createRootReducer = (history) => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    income: incomeReducer,
    expense: expenseReducer,
    ui: uiReducer,
  } as any)

  const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
      state = undefined
    }

    return appReducer(state, action)
  }

  return rootReducer
}

export default createRootReducer
