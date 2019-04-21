import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import api from 'api'

import createRootReducer from './createRootReducer'

export const history = createBrowserHistory()

const middleware = [
  thunkMiddleware.withExtraArgument(api),
  routerMiddleware(history),
]

const configureStore = (initialState) =>
  createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools({
      trace: true,
      traceLimit: 25,
    })(applyMiddleware(...middleware)),
  )

export default configureStore
