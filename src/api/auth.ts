import axios from 'axios'
import { API_URL } from 'constants'

export const registration = (name: string, password: string) =>
  axios({
    method: 'post',
    url: `${API_URL.V1}/reg`,
    data: {
      name,
      password,
    },
  })
