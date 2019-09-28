import AuthService from '@/services/AuthService'
import UserService from '@/services/UserService'

export const namespaced = true

export const state = {
  user: {},
  token: '',
  isAuthenticated: false
}

export const getters = {
  token(state) {
    return state.token || localStorage.getItem('token')
  },
  ownerId(state) {
    return state.user._id
  },
  user(state) {
    return state.user
  },
  userTags(state) {
    return state.user.tags
  }
}

export const mutations = {
  CLEAR_AUTH(state) {
    state.user = {}
    state.token = ''
    state.isAuthenticated = false
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },
  SET_AUTH(state, authData) {
    state.user = authData.user
    state.token = authData.token
    state.isAuthenticated = true
    localStorage.setItem('token', authData.token)
    localStorage.setItem('user', JSON.stringify(authData.user))
  },
  CLEAR_USER(state) {
    state.user = {}
  },
  SET_USER(state, user) {
    state.user = user
  }
}
export const actions = {
  login({ commit, dispatch }, loginData) {
    commit('CLEAR_AUTH')
    dispatch('clearUserData')
    return new Promise((resolve, reject) => {
      AuthService.postLogin(loginData)
        .then(response => {
          commit('SET_AUTH', response.data)
          const notification = {
            type: 'success',
            message: 'LOGIN SUCCESS!'
          }
          dispatch('notification/add', notification, { root: true })
          resolve(response.data)
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'LOGIN FAILURE! ' + error.message
          }
          dispatch('notification/add', notification, { root: true })
          reject(error)
        })
    })
  },
  register({ commit, dispatch }, registerData) {
    commit('CLEAR_AUTH')
    dispatch('clearUserData')
    return new Promise((resolve, reject) => {
      AuthService.postRegister(registerData)
        .then(response => {
          commit('SET_AUTH', response.data)
          const notification = {
            type: 'success',
            message: 'REGISTER SUCCESS!'
          }
          dispatch('notification/add', notification, { root: true })
          resolve(response.data)
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'REGISTER FAILURE! ' + error.message
          }
          dispatch('notification/add', notification, { root: true })
          reject(error)
        })
    })
  },
  getFromLocal({ commit }) {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('token')
      const user = JSON.parse(localStorage.getItem('user'))
      if (token && user) {
        const authData = { token, user }
        commit('SET_AUTH', authData)
        resolve()
      } else {
        reject()
      }
    })
  },
  updateUser({ commit, dispatch }, userUpdate) {
    commit('CLEAR_USER')
    return new Promise((resolve, reject) => {
      UserService.putUser(userUpdate)
        .then(response => {
          commit('SET_USER', response.data)
          const notification = {
            type: 'success',
            message: 'User Updated!'
          }
          dispatch('notification/add', notification, { root: true })
          resolve(response.data)
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'USER UPDATE FAILURE! ' + error.message
          }
          dispatch('notification/add', notification, { root: true })
          reject(error)
        })
    })
  },
  getUser({ commit, dispatch }, email) {
    commit('CLEAR_USER')
    return new Promise((resolve, reject) => {
      UserService.getUser(email)
        .then(response => {
          commit('SET_USER', response.data)
          const notification = {
            type: 'success',
            message: 'User fetched.'
          }
          dispatch('notification/add', notification, { root: true })
          resolve(response.data)
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'USER FETCH FAILURE! ' + error.message
          }
          dispatch('notification/add', notification, { root: true })
          reject(error)
        })
    })
  },
  clearUserData({ commit }) {
    commit('checklist/CLEAR_CHECKLISTS', null, { root: true })
  }
}
