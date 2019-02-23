import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import LoginForm from 'containers/LoginForm/index'

import styles from './styles.module.scss'

const mapStateToProps = () => ({
  isLogin: false,
})

const mapDispatchToProps = {}

const LoginPage = () => {
  return (
    <div className={styles.pageContainer}>
      <LoginForm />
    </div>
  )
}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(LoginPage)
