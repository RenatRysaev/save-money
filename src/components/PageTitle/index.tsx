import * as React from 'react'

import { IPageTitleProps } from './types'

const PageTitle: React.FC<IPageTitleProps> = ({ children }) => (
  <h1>{children}</h1>
)

export default PageTitle
