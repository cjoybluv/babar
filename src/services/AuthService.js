import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://127.0.0.1:8881/api/v1`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  postLogin(loginData) {
    return apiClient.post('/auth/login', loginData)
  }
  // getEvents(perPage, page) {
  //   return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  // },
  // getEvent(id) {
  //   return apiClient.get('/events/' + id)
  // },
  // postEvent(event) {
  //   return apiClient.post('/events', event)
  // }
}
