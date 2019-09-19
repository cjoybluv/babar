import ChecklistService from '@/services/ChecklistService'

export const namespaced = true

export const state = {
  checklists: []
}

export const mutations = {
  CLEAR_CHECKLISTS(state) {
    state.checklists = []
  },
  SET_CHECKLISTS(state, checklists) {
    state.checklists = checklists
  }
}

export const actions = {
  fetchAll({ commit, dispatch }, ownerId) {
    commit('CLEAR_CHECKLISTS')
    return new Promise((resolve, reject) => {
      ChecklistService.getChecklists(ownerId)
        .then(response => {
          commit('SET_CHECKLISTS', response.data)
          const notification = {
            type: 'success',
            message: 'Checklists Fetched!'
          }
          dispatch('notification/add', notification, { root: true })
          resolve(response.data)
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'Checklists Fetch Error:' + error.message
          }
          dispatch('notification/add', notification, { root: true })
          reject(error)
        })
    })
  }
}
