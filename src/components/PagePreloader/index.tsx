import * as React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import styles from './styles.module.scss'

const PagePreloader = () => (
  <div className={styles.preloaderWrapper}>
    <CircularProgress size={70} />
  </div>
)

export default PagePreloader
