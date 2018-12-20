import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from './routes'

const App = () => (
  <Switch>
    {routes.map(route => (
      <Route
        path={route.path}
        component={route.component}
        exact={route.isExact}
        key={route.path}
      />
    ))}
  </Switch>
)

export default App
