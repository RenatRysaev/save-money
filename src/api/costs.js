import { API_URL } from 'constants'
import { request } from './utils'

export const getCosts = () =>
  request({
    method: 'get',
    url: `${API_URL.V1}/costs`,
    withToken: true,
  })
