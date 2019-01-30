import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const CheckOnEmpty = ({ children, listLength = 0, fallbackContent }) =>
  listLength !== 0 ? (
    <Fragment>{children}</Fragment>
  ) : (
    <Fragment>{fallbackContent}</Fragment>
  )

CheckOnEmpty.propTypes = {
  children: PropTypes.any,
  listLength: PropTypes.number.isRequired,
  fallbackContent: PropTypes.any.isRequired,
}

export default CheckOnEmpty
