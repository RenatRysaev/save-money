import * as React from 'react'
import { connect } from 'react-redux'

import RegForm from 'containers/RegForm'

import styles from './styles.module.scss'

const RegPage = () => {
  return (
    <div className={styles.pageContainer}>
      <RegForm />
    </div>
  )
}

export default RegPage
