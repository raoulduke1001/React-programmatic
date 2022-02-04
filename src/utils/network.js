import axios from "axios"

export const client = axios.create()

export const API_URL = "http://188.124.36.163:8000"

client.defaults.baseURL = API_URL

client.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token")

    if (token !== null) {
      const headers = { Authorization: `Bearer ${token}` }

      config.headers = {
        ...config.headers,
        ...headers,
      }
    }

    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response, config } = error

    // console.log(response, config, 'Error during request. TODO: handle later')

    return Promise.reject(error)
  }
)
