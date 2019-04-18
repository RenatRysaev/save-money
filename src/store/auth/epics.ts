import { mergeMap, map } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { ofType, combineEpics } from 'redux-observable'

import { actionRegistrationRequest } from './actions'

const epicRegistration = (action$, state) =>
  action$.pipe(
    ofType(actionRegistrationRequest),
    mergeMap(({ payload }) => {
      console.log(state)
      const { login, name, password } = payload
      const response = ajax
        .post('http://localhost:8080/api/v1/registration', payload, {
          'Content-Type': 'application/json',
        })
        .pipe(map((response) => console.log(response)))
      return response
    }),
  )

// export const epicRegistration = (action$) => {
//   console.log(action$.pipe)
// }

export default combineEpics(epicRegistration)
