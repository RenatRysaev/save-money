import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Layout from 'components/Layout/index'
import Header from 'containers/Header/index'
import Modals from 'containers/Modals/index'

import { isRenderHeader } from 'utils/index'

import routes from 'routes'

const App = () => (
  <React.Fragment>
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
  </React.Fragment>
)

export default App
