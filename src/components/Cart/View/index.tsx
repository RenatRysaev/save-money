import * as React from 'react'
import moment from 'moment'

import styles from './styles.module.scss'

const View = ({ name, sum, currency, date }) => (
  <React.Fragment>
    <div className={styles.name}>{name}</div>
    <div className={styles.money}>
      <span className={styles.sum}>{sum}</span>
      <span className={styles.currency}>{currency}</span>
    </div>
    {date && (
      <div className={styles.date}>{moment(date).format('DD.MM.YYYY')}</div>
    )}
  </React.Fragment>
)

export default View
