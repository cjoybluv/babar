export const namespaced = true

export const state = {
  itemType: '',
  items: [],
  itemMap: []
}

export const mutations = {
  SET_TREE_VIEW(state, { itemType, items, itemMap }) {
    state.itemType = itemType
    state.items = items
    state.itemMap = itemMap
  }
}
