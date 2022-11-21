import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://api.tvmaze.com'
})

export default axiosClient