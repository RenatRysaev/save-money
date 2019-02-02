import React from 'react'
import { number, string, bool, any } from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loader = ({ size, className, isLoading, children }) =>
  isLoading ? (
    <CircularProgress className={className} size={size} />
  ) : (
    <div>{children}</div>
  )

Loader.propTypes = {
  size: number,
  className: string,
  isLoading: bool,
  children: any,
}

export default Loader
