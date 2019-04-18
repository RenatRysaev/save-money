import { combineEpics } from 'redux-observable'

import authEpic from 'store/auth/epics'
// import { epicRegistration } from 'store/auth/epics'

const rootEpic = combineEpics(authEpic)

export default rootEpic
