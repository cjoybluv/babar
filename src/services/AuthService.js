import axios from 'axios'
import store from '@/store/store'

/* eslint-disable */
const VUE_APP_API_URL =
  process.env.VUE_APP_API_URL ||
  __dirname + '/api/' + process.env.VUE_APP_API_VERSION
/* eslint-enable */

/** Default config for axios instance */
let config = {
  baseURL: VUE_APP_API_URL,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
}

/** Creating the instance for axios */
const apiClient = axios.create(config)

/** Auth token interceptors */
const authInterceptor = config => {
  const token = store.getters['auth/token']

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}

/** logger interceptors */
const loggerInterceptor = config => {
  /** TODO */
  return config
}

/** Adding the request interceptors */
apiClient.interceptors.request.use(authInterceptor)
apiClient.interceptors.request.use(loggerInterceptor)

/** Adding the response interceptors */
// apiClient.interceptors.response.use(
//   response => {
//     /** TODO: Add any response interceptors */
//     return response;
//   },
//   error => {
//     /** TODO: Do something with response error */
//     return Promise.reject(error);
//   }
// );

export { apiClient }

export default {
  postLogin(loginData) {
    return apiClient.post('/auth/login', loginData)
  }
}
