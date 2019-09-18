import AuthService from '@/services/AuthService'

export const namespaced = true

export const state = {
  user: {},
  token: '',
  isAuthenticated: false
}

export const getters = {

}

export const mutations = {
  SET_AUTH(state, authData) {
    state.user = authData.user
    state.token = authData.token
    state.isAuthenticated = true
    localStorage.setItem('token', authData.token)
    localStorage.setItem('user', JSON.stringify(authData.user))
  }
}
export const actions = {
  login({ commit }, loginData) {
    return AuthService.postLogin(loginData)
      .then((response) => {
        commit('SET_AUTH', response.data)
        // const notification = {
        //   type: 'success',
        //   message: 'Your event has been created!'
        // }
        // dispatch('notification/add', notification, { root: true })
      })
      .catch(error => {
        console.error('ACTIONS: login', error)
        // const notification = {
        //   type: 'error',
        //   message: 'There was a problem creating your event: ' + error.message
        // }
        // dispatch('notification/add', notification, { root: true })
        throw error
      })
  }
}
