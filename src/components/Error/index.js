import React from 'react'
import { string, number } from 'prop-types'

import styles from './styles.module.scss'

const Error = ({ message, margin, fontSize }) => (
  <p className={styles.error} style={{ margin, fontSize: `${fontSize} px` }}>
    {message}
  </p>
)

Error.defaultProps = {
  fontSize: 14,
}

Error.propTypes = {
  message: string,
  margin: string,
  fontSize: number,
}

export default Error
