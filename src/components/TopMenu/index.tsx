import * as React from 'react'
import classnames from 'classnames'

import { NavLink } from 'react-router-dom'

import { ITopMenuProps } from './types'

import styles from './styles.module.scss'

const TopMenu: React.FC<ITopMenuProps> = ({ list }) => (
  <nav className={styles.nav}>
    {list.map(({ name, path }) => (
      <NavLink to={path} key={path}>
        <span
          className={classnames({
            [styles.menuItem]: true,
            [styles.selectedMenuItem]: window.location.pathname === path,
          })}
        >
          {name}
        </span>
      </NavLink>
    ))}
  </nav>
)

TopMenu.defaultProps = {
  list: [],
}

export default TopMenu
