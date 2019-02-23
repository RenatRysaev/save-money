import * as React from 'react'
import { node } from 'prop-types'

const PageTitle = ({ children }) => <h1>{children}</h1>

PageTitle.propTypes = {
  children: node.isRequired,
}

export default PageTitle
