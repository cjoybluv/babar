export const namespaced = true

export const state = {
  itemType: '',
  items: [],
  itemMap: [],
  selectedHeaderField: 'status'
}

export const mutations = {
  SET_TREE_VIEW(state, { itemType, items, itemMap, headerField }) {
    state.itemType = itemType
    state.items = items
    state.itemMap = itemMap
    state.selectedHeaderField = headerField
  }
}
