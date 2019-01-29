import React from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import styles from './styles.module.scss'

const CostPreviewCart = ({
  name,
  description,
  sum,
  date,
  onEdit,
  onDelete,
}) => (
  <Paper className={styles.cart} elevation={1}>
    <h2 className={styles.title}>{name}</h2>
    {description && <p className={styles.description}>{description}</p>}

    <div className={styles.pair}>
      <h3 className={styles.key}>Sum</h3>
      <p className={styles.value}>{sum}</p>
    </div>

    <div className={styles.pair}>
      <h3 className={styles.key}>Date</h3>
      <p className={styles.value}>{date}</p>
    </div>

    <div>
      <Button className={styles.editButton} variant="outlined">
        Edit
      </Button>
      <Button variant="outlined">Delete</Button>
    </div>
  </Paper>
)

const { string, func } = PropTypes

CostPreviewCart.propTypes = {
  name: string,
  description: string,
  sum: string,
  date: string,
  onEdit: func,
  onDelete: func,
}

export default CostPreviewCart
