import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import createRootReducer from './createRootReducer'
import rootEpic from './rootEpic'

export const history = createBrowserHistory()

const epicMiddleware = createEpicMiddleware()

const middleware = [epicMiddleware, routerMiddleware(history)]

const configureStore = (initialState) => {
  const createStoreFunction = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools({})(applyMiddleware(...middleware)),
  )

  epicMiddleware.run(rootEpic)

  return createStoreFunction
}

export default configureStore
