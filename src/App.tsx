import { hot } from 'react-hot-loader/root'
import * as React from 'react'
import { Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import CustomRoute from 'components/CustomRoute'
import ErrorBoundary from 'components/ErrorBoundary'
import Fallback from 'components/Fallback'
import Modals from 'containers/Modals'

import routes from 'routes'

const App = () => (
  <React.Fragment>
    <ErrorBoundary fallbackComponent={<Fallback />}>
      <Switch>
        {routes.map((route) => (
          <CustomRoute key={route.path} {...route} />
        ))}
      </Switch>

      <Modals />
      <ToastContainer autoClose={2000} />
    </ErrorBoundary>
  </React.Fragment>
)

export default hot(App)
