import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import RegForm from 'containers/RegForm/index'

import styles from './styles.module.scss'

const mapStateToProps = () => ({
  isLogin: false,
})

const mapDispatchToProps = {}

const RegPage = () => {
  return (
    <div className={styles.pageContainer}>
      <RegForm />
    </div>
  )
}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(RegPage)
