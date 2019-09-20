import ChecklistService from '@/services/ChecklistService'

export const namespaced = true

export const state = {
  checklists: [],
  currentChecklist: {}
}

export const getters = {
  getChecklistById: state => id => {
    return state.checklists.find(checklist => checklist._id === id)
  }
}

export const mutations = {
  CLEAR_CHECKLISTS(state) {
    state.checklists = []
  },
  SET_CHECKLISTS(state, checklists) {
    state.checklists = checklists
  },
  SET_CURRENT_CHECKLIST(state, checklist) {
    state.currentChecklist = checklist
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
  },
  edit({ commit }, checklist) {
    return new Promise((resolve, reject) => {
      commit('SET_CURRENT_CHECKLIST', checklist)
      resolve()
    })
  }
}
