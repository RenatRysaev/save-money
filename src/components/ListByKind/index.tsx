import React from 'react'

import Cart from 'components/Cart'

import styles from './styles.module.scss'

const ListByKind = ({ title, kind, items }) => (
  <div>
    <h3>{title}</h3>

    <div className={styles.list}>
      {items
        .filter((expenseItem) => expenseItem.kind === kind)
        .map((expenseItem) => (
          <Cart
            key={expenseItem.id}
            id={expenseItem.id}
            name={expenseItem.name}
            sum={expenseItem.sum}
            currency={expenseItem.currency}
            date={expenseItem.date}
          />
        ))}
    </div>
  </div>
)

export default ListByKind
