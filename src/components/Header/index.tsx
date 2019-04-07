import * as React from 'react'

import { TOP_MENU } from 'constants/menu'

import AppBar from '@material-ui/core/AppBar'
import Logout from 'containers/Logout'

import TopMenu from 'components/TopMenu'

import styles from './styles.module.scss'

const Header = () => (
  <AppBar className={styles.appBar} position="relative">
    <TopMenu list={TOP_MENU} />
    <div className={styles.logoutWrapper}>
      <Logout />
    </div>
  </AppBar>
)

export default Header
