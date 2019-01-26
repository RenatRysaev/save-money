import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { isFixedFooterToBottom } from './helpers'

import styles from './styles.module.scss'

const Layout = ({
  header: Header,
  sidebar: Sidebar,
  footer: Footer,
  children,
}) => (
  <div className={styles.layout}>
    {Header && (
      <header className={styles.header}>
        <Header />
      </header>
    )}

    <div className={styles.contentWrapper}>
      {Sidebar && (
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
      )}
      <div className={styles.body}>{children}</div>
    </div>

    {Footer && (
      <footer
        className={classNames({
          [styles.footer]: true,
          [styles.bottomFixedFooter]: isFixedFooterToBottom(),
        })}
      >
        <Footer />
      </footer>
    )}
  </div>
)

Layout.propTypes = {
  header: PropTypes.func,
  sidebar: PropTypes.func,
  footer: PropTypes.func,
}

export default Layout
