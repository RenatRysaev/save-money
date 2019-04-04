import React from 'react'

import Cart from 'components/Cart'

import styles from './styles.module.scss'

const ListByKind = ({ title, kind, items }) => (
  <div>
    <h3>{title}</h3>

    <div className={styles.list}>
      {items
        .filter((item) => item.kind === kind)
        .map((item) => (
          <Cart
            key={item._id}
            id={item._id}
            name={item.name}
            sum={item.sum}
            currency={item.currency}
            date={item.date}
          />
        ))}
    </div>
  </div>
)

export default ListByKind
