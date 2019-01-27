import React from 'react'

import { TOP_MENU } from 'constants'

import Logout from 'containers/Logout'

import TopMenu from 'components/TopMenu'

import styles from './styles.module.scss'

const Header = () => (
  <div className={styles.headerWrapper}>
    <TopMenu list={TOP_MENU} />
    <div className={styles.logoutWrapper}>
      <Logout />
    </div>
  </div>
)

export default Header
