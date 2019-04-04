import React from 'react'
import moment from 'moment'

import Paper from '@material-ui/core/Paper/Paper'

import { ICartProps } from './types'

import styles from './styles.module.scss'

const Cart: React.FC<ICartProps> = ({ id, name, sum, currency, date }) => (
  <Paper className={styles.cartWrapper}>
    <div className={styles.name}>{name}</div>
    <div className={styles.money}>
      <span className={styles.sum}>{sum}</span>
      <span className={styles.currency}>{currency}</span>
    </div>
    <div className={styles.date}>{moment(date).format('DD.MM.YYYY')}</div>
  </Paper>
)

export default Cart
