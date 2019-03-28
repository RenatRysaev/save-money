import { curry } from 'lodash'
import { EmptyActionCreator } from 'redux-act'

export const handleSimilarActions = curry(
  (reducer, actions: EmptyActionCreator[], key: string, value) => {
    actions.forEach((action) => {
      reducer.on(action, (state) => state.set(key, value))
    })
  },
)
