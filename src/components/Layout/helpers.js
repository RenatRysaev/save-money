import get from 'lodash/get'

export const isFixedFooterToBottom = () =>
  get(window, 'innerHeight') > get(document, 'body.clientHeight')
