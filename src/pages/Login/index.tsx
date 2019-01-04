import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { compose } from 'redux'
import { connect } from 'react-redux'

import LoginForm from 'containers/LoginForm'

const styles = require('./styles.scss')

const mapStateToProps = () => ({
  isLogin: false,
})

const mapDispatchToProps = {}

const Login = () => {
  return (
    <div className={styles.pageContainer}>
      <LoginForm />
    </div>
  )
}
export default compose(
  hot,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Login)
