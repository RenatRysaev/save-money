import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader/root'
import { compose } from 'redux'

import PageTitle from 'components/PageTitle'

const IncomePage = () => (
  <Fragment>
    <PageTitle>Income</PageTitle>
    <div>Income page</div>
  </Fragment>
)

export default compose(hot)(IncomePage)
