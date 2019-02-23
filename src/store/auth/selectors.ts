import get from 'lodash/get'

export const selectAuth = (state) => get(state, 'auth', {})

export const selectIsLoadingAuth = (state) => selectAuth(state).get('isLoading')
