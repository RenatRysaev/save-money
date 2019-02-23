import axios from 'axios'

type requestType = {
  url: string
  method: string
  data?: object
  token?: string
}

export const request = ({ url, method, data = {}, token }: requestType) => {
  const params = Object.assign(
    { url, method, data },
    token && { headers: { Authorization: token } },
  )

  return axios(params)
}
