import get from 'lodash/get'

export const isFixedFooterToBottom = () =>
  window.innerHeight > get(document, 'body.clientHeight', 0)
