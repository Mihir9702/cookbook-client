import axios from 'axios'
import { url } from './url'

export const get = (route: string) => {
  const token = localStorage.getItem('token')

  if (!token) return

  return axios.get(`${url}${route}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
}

export const post = (route: string, body: object) => {
  const token = localStorage.getItem('token')

  if (!token) return

  console.log(`JWT: ${token}`)

  return axios.post(`${url}${route}`, body, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
}
