import * as React from 'react'

import { IErrorProps } from './types'

import styles from './styles.module.scss'

const Error: React.FC<IErrorProps> = ({ message, margin, fontSize }) => (
  <p className={styles.error} style={{ margin, fontSize: `${fontSize} px` }}>
    {message}
  </p>
)

Error.defaultProps = {
  fontSize: 14,
}

export default Error
