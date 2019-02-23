import * as React from 'react'
import { arrayOf, shape, string } from 'prop-types'

import { NavLink } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'

import styles from './styles.module.scss'

const TopMenu = ({ list }) => (
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

TopMenu.propTypes = {
  list: arrayOf(
    shape({
      name: string,
      path: string,
    }),
  ),
}

export default TopMenu
