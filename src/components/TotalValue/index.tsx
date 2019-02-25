import * as React from 'react'

import Loader from 'components/Loader'

import { TotalValueProps } from './types'

import styles from './styles.module.scss'

const TotalValue: React.FC<TotalValueProps> = ({ name, value, isLoading }) => (
  <div>
    <span className={styles.name}>{`${name}:`}</span>
    <Loader isLoading={isLoading}>
      <span>{value}</span>
    </Loader>
  </div>
)

export default TotalValue
