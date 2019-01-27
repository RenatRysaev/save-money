import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import createRootReducer from './createRootReducer'

export const history = createBrowserHistory()

const middleware = [thunkMiddleware, routerMiddleware(history)]

const configureStore = (initialState) =>
  createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools({})(applyMiddleware(...middleware)),
  )

export default configureStore
