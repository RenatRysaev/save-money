import * as React from 'react'

import { NavLink } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'

import { ITopMenuProps } from './types'

import styles from './styles.module.scss'

const TopMenu: React.FC<ITopMenuProps> = ({ list }) => (
  <nav className={styles.nav}>
    {list.map(({ name, path }) => (
      <NavLink to={path} key={path}>
        <MenuItem selected={window.location.pathname === path}>{name}</MenuItem>
      </NavLink>
    ))}
  </nav>
)

TopMenu.defaultProps = {
  list: [],
}

export default TopMenu
