import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://localhost:8000',
})

export const fetcher = (url) => instance.get(url).then((res) => res.data)
