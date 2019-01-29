import axios from 'axios'
import { getToken } from 'utils'

/**
 * Creates request
 * @param {string} url
 * @param {string} method
 * @param {object} data
 * @param {boolean} withToken
 */
export const request = ({ url, method, data = {}, withToken }) => {
  const params = Object.assign(
    { url, method, data },
    withToken && { headers: { Authorization: getToken() } },
  )

  return axios(params)
}
