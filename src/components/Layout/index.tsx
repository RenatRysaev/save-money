import * as React from 'react'
import classNames from 'classnames'

import PageTitle from 'components/PageTitle'

import { isFixedFooterToBottom } from './helpers'

import { ILayoutProps } from './types'

import styles from './styles.module.scss'

const Layout: React.FC<ILayoutProps> = ({
  header,
  sidebar,
  footer,
  title,
  children,
}) => (
  <div className={styles.layout}>
    {header && <header className={styles.header}>{header}</header>}

    <div className={styles.contentWrapper}>
      {sidebar && <aside className={styles.sidebar}>{sidebar}</aside>}
      <div className={styles.body}>
        {title && <PageTitle>{title}</PageTitle>}

        {children}
      </div>
    </div>

    {footer && (
      <footer
        className={classNames({
          [styles.footer]: true,
          [styles.bottomFixedFooter]: isFixedFooterToBottom(),
        })}
      >
        {footer}
      </footer>
    )}
  </div>
)

export default Layout
