import React from 'react'
import { bool, number, string } from 'prop-types'

import Loader from 'components/Loader'

import styles from './styles.module.scss'

const TotalValue = ({ name, value, isLoading }) => (
  <div>
    <span className={styles.name}>{`${name}:`}</span>
    <Loader isLoading={isLoading}>
      <span>{value}</span>
    </Loader>
  </div>
)

TotalValue.propTypes = {
  name: string.isRequired,
  value: number.isRequired,
  isLoading: bool,
}

export default TotalValue
