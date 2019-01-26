import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loader = ({ size, className }) => (
  <CircularProgress className={className} size={size} />
)

Loader.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
}

export default Loader
