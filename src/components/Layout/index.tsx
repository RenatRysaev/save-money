import * as React from 'react'
import classNames from 'classnames'

import { isFixedFooterToBottom } from './helpers'

import { LayoutProps } from './types'

import styles from './styles.module.scss'

const Layout: React.FC<LayoutProps> = ({
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

export default Layout
