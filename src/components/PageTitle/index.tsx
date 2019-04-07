import * as React from 'react'

import { IPageTitleProps } from './types'

import styles from './styles.module.scss'

const PageTitle: React.FC<IPageTitleProps> = ({ children }) => (
  <h1 className={styles.title}>{children}</h1>
)

export default PageTitle
