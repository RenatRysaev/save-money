import { reduce } from 'lodash'
import { CURRENCY } from 'constants/currency'

export const adaptedCurrencyItems = reduce(
  CURRENCY,
  (acc, item) => ({
    ...acc,
    [item]: {
      name: item,
      value: item,
    },
  }),
  {},
)
