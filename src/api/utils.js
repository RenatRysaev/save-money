import axios from 'axios'

/**
 * Creates request
 * @param {string} url
 * @param {string} method
 * @param {object} data
 * @param {string} token
 */
export const request = ({ url, method, data = {}, token }) => {
  const params = Object.assign(
    { url, method, data },
    token && { headers: { Authorization: token } },
  )

  return axios(params)
}
