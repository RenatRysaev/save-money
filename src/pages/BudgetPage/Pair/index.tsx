import * as React from 'react'

import { IPairProps } from './types'

import styles from './styles.module.scss'

const Pair: React.FC<IPairProps> = ({ keyName, value, currency }) => (
  <div className={styles.pair}>
    <span className={styles.key}>{keyName}: </span>
    <div>
      <span className={styles.value}>{value}</span>
      <span>{currency}</span>
    </div>
  </div>
)

export default Pair
