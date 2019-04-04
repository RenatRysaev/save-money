import * as React from 'react'

import { default as MaterialTabs } from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { ITabs } from './types'

const Tabs: React.FC<ITabs> = ({ items, children }) => {
  const [tabValue, setTabValue] = React.useState(0)

  const handleChangeTab = (event, value) => {
    setTabValue(value)
  }

  return (
    <React.Fragment>
      <MaterialTabs
        value={tabValue}
        onChange={handleChangeTab}
        indicatorColor="primary"
      >
        {items.map((item) => (
          <Tab key={item.id} label={item.name} />
        ))}
      </MaterialTabs>

      {children(tabValue)}
    </React.Fragment>
  )
}

Tabs.defaultProps = {
  items: [],
}

export default Tabs
