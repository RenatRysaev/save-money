import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import routes from './routes'

const App = () => (
  <Fragment>
    <Switch>
      {routes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.isExact}
          key={route.path}
        />
      ))}
    </Switch>
    <ToastContainer autoClose={2000} />
  </Fragment>
)

export default hot(App)
