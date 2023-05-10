import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import Hosts from '@/api/hosts'

const request: AxiosInstance = axios.create({
  // API 请求的默认前缀
  // baseURL: import.meta.env.VITE_APP_BASE_URL + '',
  timeout: 60 * 1000 // 请求超时时间为60s
})

request.interceptors.response.use(
  (response) => response,
  (response) => {
    if (response.response?.data?.error) {
      return Promise.reject(new Error(response.response.data.error))
    } else {
      return Promise.reject(response)
    }
  }
)

export default request
