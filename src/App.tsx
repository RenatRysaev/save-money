import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Layout from 'components/Layout'
import ErrorBoundary from 'components/ErrorBoundary'
import Fallback from 'components/Fallback'
import Header from 'containers/Header'
import Modals from 'containers/Modals'

import { isRenderHeader } from 'utils'

import routes from 'routes'

const App = () => (
  <React.Fragment>
    <ErrorBoundary fallbackComponent={<Fallback />}>
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
    </ErrorBoundary>
  </React.Fragment>
)

export default App
