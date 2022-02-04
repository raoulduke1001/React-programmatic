import axios from "axios"
import { client, API_URL } from "./network"

export const fetcher = (url, params) =>
  client
    .get(`${API_URL}/${url}`, { params })
    .then((res) => res.data)

const defaultFetch = (url) => axios.get(url).then((res) => res.data)

export default defaultFetch
