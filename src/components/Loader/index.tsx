import React, { Fragment } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import { LoaderProps } from './types'

const Loader: React.FC<LoaderProps> = ({
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
