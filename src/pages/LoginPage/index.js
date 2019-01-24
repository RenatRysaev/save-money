import React from 'react'
import { hot } from 'react-hot-loader/root'
import { compose } from 'redux'
import { connect } from 'react-redux'

import LoginForm from 'containers/LoginForm/index'

import styles from './styles.scss'

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
  hot,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(LoginPage)
