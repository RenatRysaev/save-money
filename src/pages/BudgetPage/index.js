import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader/root'
import { compose } from 'redux'

import PageTitle from 'components/PageTitle'

const BudgetPage = () => (
  <Fragment>
    <PageTitle>Budget</PageTitle>
    <div>Budget page</div>
  </Fragment>
)

export default compose(hot)(BudgetPage)
