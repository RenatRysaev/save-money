import React, { Fragment } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import { ILoaderProps } from './types'

const Loader: React.FC<ILoaderProps> = ({
  size,
  className,
  isLoading,
  children,
}) => (
  <Fragment>
    {isLoading && <CircularProgress className={className} size={size} />}
    {children}
  </Fragment>
)

export default Loader
