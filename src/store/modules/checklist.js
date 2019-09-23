import ChecklistService from '@/services/ChecklistService'
import { createFolderArray } from '@/helpers/displayHelpers'

export const namespaced = true

export const state = {
  checklists: [],
  folderDisplay: [],
  itemMap: [],
  selectedChecklist: {}
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
  UPDATE_CHECKLIST(state, updatedChecklist) {
    const idx = state.checklists.findIndex(
      checklist => checklist._id === updatedChecklist._id
    )
    state.checklists[idx] = updatedChecklist
  },
  SAVE_CHECKLIST(state, checklist) {
    state.checklists.push(checklist)
  },
  SET_SELECTED_CHECKLIST(state, selectedChecklist) {
    state.selectedChecklist = selectedChecklist
  },
  CLEAR_SELECTED_CHECKLIST(state) {
    state.selectedChecklist = {}
  },
  SET_FOLDER_DISPLAY(state, result) {
    state.displayData = result.displayArray
    state.itemMap = result.itemMap
  }
}

export const actions = {
  fetchAll({ commit, dispatch }, ownerId) {
    commit('CLEAR_CHECKLISTS')
    return new Promise((resolve, reject) => {
      ChecklistService.getChecklists(ownerId)
        .then(response => {
          commit('SET_CHECKLISTS', response.data)
          dispatch('updateFolderDisplay')
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
      commit('SET_SELECTED_CHECKLIST', checklist)
      resolve()
    })
  },
  clearForm({ commit }) {
    return new Promise(resolve => {
      commit('CLEAR_SELECTED_CHECKLIST')
      resolve()
    })
  },
  save({ commit, dispatch }, checklist) {
    return new Promise((resolve, reject) => {
      if (checklist._id) {
        ChecklistService.putChecklist(checklist)
          .then(response => {
            commit('UPDATE_CHECKLIST', response.data)
            commit('CLEAR_SELECTED_CHECKLIST')
            dispatch('updateFolderDisplay')
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
            commit('CLEAR_SELECTED_CHECKLIST')
            dispatch('updateFolderDisplay')
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
  updateFolderDisplay({ state, rootState, commit }) {
    commit(
      'SET_FOLDER_DISPLAY',
      createFolderArray(rootState.auth.user.folders, state.checklists, 'title')
    )
  }
}
