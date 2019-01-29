import '@babel/polyfill'
import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import { thunkCheckLogin } from 'store/auth/thunks'

import configureStore, { history } from './configureStore'

import App from './App'

import './index.scss'

const store = configureStore()

store.dispatch(thunkCheckLogin())

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
