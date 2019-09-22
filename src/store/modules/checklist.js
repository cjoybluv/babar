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
    if (checklist.masterChecklist) {
      let today = new Date(Date.now())
      let titleDateTime =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate() +
        ' ' +
        today.getHours() +
        ':' +
        today.getMinutes() +
        ':' +
        today.getSeconds()
      state.currentChecklist = {
        ...checklist,
        masterChecklist: false,
        folderName: checklist.folderName ? checklist.folderName : 'Log',
        sourceMasterId: checklist._id,
        title: titleDateTime + ' / ' + checklist.title
      }
    } else {
      state.currentChecklist = { ...checklist }
    }
  },
  CLEAR_CURRENT_CHECKLIST(state) {
    state.currentChecklist = {}
  },
  UPDATE_CHECKLIST(state, updatedChecklist) {
    const idx = state.checklists.findIndex(
      checklist => checklist._id === updatedChecklist._id
    )
    state.checklists[idx] = updatedChecklist
  },
  SAVE_CHECKLIST(state, checklist) {
    state.checklists.push(checklist)
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
    return new Promise(resolve => {
      commit('SET_CURRENT_CHECKLIST', checklist)
      resolve()
    })
  },
  save({ commit, dispatch }, checklist) {
    return new Promise((resolve, reject) => {
      if (checklist._id) {
        ChecklistService.putChecklist(checklist)
          .then(response => {
            commit('UPDATE_CHECKLIST', response.data)
            commit('CLEAR_CURRENT_CHECKLIST')
            const notification = {
              type: 'success',
              message: 'Checklist Updated!'
            }
            dispatch('notification/add', notification, { root: true })
            resolve(response.data)
          })
          .catch(error => {
            const notification = {
              type: 'error',
              message: 'CHECKLIST UPDATE FAILURE:' + error.message
            }
            dispatch('notification/add', notification, { root: true })
            reject(error)
          })
      } else {
        ChecklistService.postChecklist(checklist)
          .then(response => {
            commit('SAVE_CHECKLIST', response.data)
            commit('CLEAR_CURRENT_CHECKLIST')
            const notification = {
              type: 'success',
              message: 'Checklist saved!'
            }
            dispatch('notification/add', notification, { root: true })
            resolve(response.data)
          })
          .catch(error => {
            const notification = {
              type: 'error',
              message: 'CHECKLIST SAVE FAILURE:' + error.message
            }
            dispatch('notification/add', notification, { root: true })
            reject(error)
          })
      }
    })
  },
  clearCurrent({ commit }) {
    commit('CLEAR_CURRENT_CHECKLIST')
  }
}
