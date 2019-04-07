import * as React from 'react'
import { Route } from 'react-router-dom'

import Layout from 'components/Layout'
import Header from 'components/Header'

import { IRoute } from 'types/route'

const CustomRoute: React.FC<IRoute> = ({
  component: Component,
  ...options
}) => {
  React.useEffect(() => {
    document.title = options.title
  })

  return (
    <Route
      {...options}
      render={(props) => (
        <Layout
          header={options.withHeader ? <Header /> : null}
          title={options.title}
        >
          <Component {...options} {...props} />
        </Layout>
      )}
    />
  )
}

export default CustomRoute
