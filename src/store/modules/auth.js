import AuthService from '@/services/AuthService'

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
    return state.user.id
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
  }
}
export const actions = {
  login({ commit, dispatch }, loginData) {
    commit('CLEAR_AUTH')
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
  }
}
