import * as React from 'react'

import LoginForm from 'containers/LoginForm'

import styles from './styles.module.scss'

const LoginPage = () => {
  return (
    <div className={styles.pageContainer}>
      <LoginForm />
    </div>
  )
}
export default LoginPage
