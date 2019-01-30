import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loader = ({ size, className, isLoading, children }) =>
  isLoading ? (
    <CircularProgress className={className} size={size} />
  ) : (
    <div>{children}</div>
  )

Loader.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.any,
}

export default Loader
