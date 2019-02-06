import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Layout from 'components/Layout'
import Header from 'containers/Header'
import Modals from 'containers/Modals'

import { isRenderHeader } from 'utils'

import routes from 'routes'

const App = () => (
  <Fragment>
    <Layout header={isRenderHeader() ? Header : null}>
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
    </Layout>
    <Modals />
    <ToastContainer autoClose={2000} />
  </Fragment>
)

export default hot(App)
