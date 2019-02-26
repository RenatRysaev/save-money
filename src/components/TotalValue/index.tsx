import * as React from 'react'

import Loader from 'components/Loader'

import { ITotalValueProps } from './types'

import styles from './styles.module.scss'

const TotalValue: React.FC<ITotalValueProps> = ({ name, value, isLoading }) => (
  <div>
    <span className={styles.name}>{`${name}:`}</span>
    <Loader isLoading={isLoading}>
      <span>{value}</span>
    </Loader>
  </div>
)

export default TotalValue
