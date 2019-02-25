import * as React from 'react'

import { PageTitleProps } from './types'

const PageTitle: React.FC<PageTitleProps> = ({ children }) => (
  <h1>{children}</h1>
)

export default PageTitle
