import * as React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import { thunkLogout } from 'store/auth/thunks'

import { ILogoutProps } from './types'

const Logout: React.FC<ILogoutProps> = ({ logout }) => (
  <div>
    <Button variant="contained" onClick={logout}>
      <ExitToAppIcon />
    </Button>
  </div>
)

export default connect(
  null,
  { logout: thunkLogout },
)(Logout)
