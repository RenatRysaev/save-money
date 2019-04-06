import * as React from 'react'
import { map } from 'lodash'

import { default as MaterialSelect } from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import { ISelectProps } from './types'

const Select: React.FC<ISelectProps> = ({
  name,
  items,
  value,
  onChange,
  className,
}) => (
  <MaterialSelect
    className={className}
    name={name}
    value={value}
    onChange={onChange}
  >
    {map(items, (item) => (
      <MenuItem key={item.value} value={item.value}>
        {item.name}
      </MenuItem>
    ))}
  </MaterialSelect>
)

export default Select
