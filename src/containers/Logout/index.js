import React from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import { thunkLogout } from 'store/auth/thunks'

import styles from './styles.module.scss'

const mapDispatchToProps = {
  logout: thunkLogout,
}

const Logout = ({ logout }) => (
  <div>
    <Button variant="outlined" onClick={logout}>
      <span className={styles.buttonText}>Logout</span>
      <ExitToAppIcon />
    </Button>
  </div>
)

Logout.propTypes = {
  logout: func,
}

export default connect(
  null,
  mapDispatchToProps,
)(Logout)
