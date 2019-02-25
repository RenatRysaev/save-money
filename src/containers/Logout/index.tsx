import * as React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import { thunkLogout } from 'store/auth/thunks'

import { LogoutProps } from './types'

import styles from './styles.module.scss'

const mapDispatchToProps = {
  logout: thunkLogout,
}

const Logout: React.FC<LogoutProps> = ({ logout }) => (
  <div>
    <Button variant="outlined" onClick={logout}>
      <span className={styles.buttonText}>Logout</span>
      <ExitToAppIcon />
    </Button>
  </div>
)

export default connect(
  null,
  mapDispatchToProps,
)(Logout)
