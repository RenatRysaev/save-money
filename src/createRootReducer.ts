import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
  })

export default createRootReducer
