import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'

import styles from './styles.module.scss'

const TopMenu = ({ list }) => (
  <nav className={styles.nav}>
    {list.map(({ name, path }) => (
      <Link to={path} key={path}>
        <MenuItem selected={window.location.pathname === path}>{name}</MenuItem>
      </Link>
    ))}
  </nav>
)

const { arrayOf, shape, string } = PropTypes

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
