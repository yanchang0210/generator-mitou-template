import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASEURL
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    console.log(error)
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default service
