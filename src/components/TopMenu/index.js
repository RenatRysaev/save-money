import React from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'

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

const { arrayOf, shape, string, func } = PropTypes

TopMenu.defaultProps = {
  list: [],
  onItemClick: noop,
}

TopMenu.propTypes = {
  list: arrayOf(
    shape({
      name: string,
      path: string,
    }),
  ),
  onItemClick: func,
}

export default TopMenu
