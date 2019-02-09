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

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register(
        '/service-worker.js',
      )
      console.log('SW registered: ', registration)
    } catch (registrationError) {
      console.error('SW registration failed: ', registrationError)
    }
  })
}
