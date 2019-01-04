import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { compose } from 'redux'
import { connect } from 'react-redux'

import RegForm from 'containers/RegForm'

const styles = require('./styles.scss')

const mapStateToProps = () => ({
  isLogin: false,
})

const mapDispatchToProps = {}

const Reg = () => {
  return (
    <div className={styles.pageContainer}>
      <RegForm />
    </div>
  )
}
export default compose(
  hot,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Reg)
