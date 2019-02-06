import React, { Fragment } from 'react'
import { number, string, bool, any } from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loader = ({ size, className, isLoading, children }) => (
  <Fragment>
    {isLoading && <CircularProgress className={className} size={size} />}
    {children}
  </Fragment>
)

Loader.propTypes = {
  size: number,
  className: string,
  isLoading: bool,
  children: any,
}

export default Loader
