import * as React from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from 'constants'

const Fallback = () => (
  <div>
    Something went wrong. You can move to{' '}
    <Link to={ROUTES.BUDGET.path}>main page.</Link>
  </div>
)

export default Fallback
