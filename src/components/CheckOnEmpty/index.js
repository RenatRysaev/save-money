import React, { Fragment } from 'react'
import { any, number } from 'prop-types'

const CheckOnEmpty = ({ children, listLength = 0, fallbackContent }) =>
  listLength !== 0 ? (
    <Fragment>{children}</Fragment>
  ) : (
    <Fragment>{fallbackContent}</Fragment>
  )

CheckOnEmpty.propTypes = {
  children: any,
  listLength: number.isRequired,
  fallbackContent: any.isRequired,
}

export default CheckOnEmpty
