import axios, { AxiosPromise } from 'axios'
import { reduce } from 'lodash'

interface IrequestType {
  url: string
  method: string
  data?: object
  token?: string
}

export const request = ({
  url,
  method,
  data = {},
  token,
}: IrequestType): AxiosPromise => {
  const params = Object.assign(
    { url, method, data },
    token && { headers: { Authorization: token } },
  )

  return axios(params)
}

export const objectToUrlParams = (obj) =>
  reduce(obj, (acc, value, key) => (key ? `${acc}${key}=${value}` : ''), '?')
