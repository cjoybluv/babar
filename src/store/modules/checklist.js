import Vue from 'vue'
import ChecklistService from '@/services/ChecklistService'
import { createTreeViewArray } from '@/helpers/displayHelpers'

export const namespaced = true

export const state = {
  checklists: [],
  selectedChecklist: {}
}

export const getters = {
  getChecklistById: state => id => {
    return state.checklists.find(checklist => checklist._id === id)
  },
  // eslint-disable-next-line
  primaryTag: state => checklist => {
    return checklist.tags[0]
  },
  // eslint-disable-next-line
  status: state => checklist => {
    if (checklist.masterChecklist) return 'master'
    const unChecked = checklist.items.filter(item => !item.completed)
    if (unChecked.length) return 'active'
    const log = checklist.tags.filter(tag => tag === 'Log')
    if (log.length) return 'log'
    return 'complete'
  }
}

export const mutations = {
  CLEAR_CHECKLISTS(state) {
    state.checklists = []
    state.selectedChecklist = {}
  },
  SET_CHECKLISTS(state, checklists) {
    state.checklists = checklists
  },
  UPDATE_CHECKLIST(state, updatedChecklist) {
    const idx = state.checklists.findIndex(
      checklist => checklist._id === updatedChecklist._id
    )
    // state.checklists[idx] = updatedChecklist
    Vue.set(state.checklists, idx, updatedChecklist)
  },
  SAVE_CHECKLIST(state, checklist) {
    state.checklists.push(checklist)
  },
  SET_SELECTED_CHECKLIST(state, selectedChecklist) {
    state.selectedChecklist = selectedChecklist
  },
  CLEAR_SELECTED_CHECKLIST(state) {
    state.selectedChecklist = {}
  }
}

export const actions = {
  fetchAll({ commit, dispatch, rootState }, ownerId) {
    commit('CLEAR_CHECKLISTS')
    return new Promise((resolve, reject) => {
      ChecklistService.getChecklists(ownerId)
        .then(response => {
          commit('SET_CHECKLISTS', response.data)
          dispatch(
            'updateTreeViewDisplay',
            rootState.treeView.selectedHeaderField
          )
          const notification = {
            type: response.data.length ? 'success' : 'info',
            message: response.data.length
              ? 'Checklists Fetched!'
              : 'No Checklists Found!'
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
  save({ commit, dispatch, rootState }, checklist) {
    return new Promise((resolve, reject) => {
      checklist.ownerId = rootState.auth.user._id
      if (checklist._id) {
        ChecklistService.putChecklist(checklist)
          .then(response => {
            commit('UPDATE_CHECKLIST', response.data)
            commit('CLEAR_SELECTED_CHECKLIST')
            dispatch(
              'updateTreeViewDisplay',
              rootState.treeView.selectedHeaderField
            )
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
            dispatch(
              'updateTreeViewDisplay',
              rootState.treeView.selectedHeaderField
            )
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
  updateTreeViewDisplay({ state, rootState, commit, getters }, headerField) {
    if (
      !rootState.treeView.itemType ||
      rootState.treeView.itemType === 'checklist'
    ) {
      let items = []
      if (state.checklists) {
        items = state.checklists.map(checklist => {
          return {
            ...checklist,
            [headerField]: getters[headerField](checklist)
          }
        })
      }
      commit(
        'treeView/SET_TREE_VIEW',
        {
          itemType: 'checklist',
          headerField: headerField,
          ...createTreeViewArray(items, headerField)
        },
        { root: true }
      )
    }
  }
}
