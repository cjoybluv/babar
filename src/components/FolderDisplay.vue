<template>
  <v-treeview
    :items="displayData"
    item-key="key"
    @update:active="clickHandler"
    activatable
    dark
    dense
    color="white"
  ></v-treeview>
</template>

<script>
import { createFolderArray } from '@/helpers/displayHelpers'

export default {
  name: 'FolderDisplay',
  props: ['folders', 'items', 'itemNameField', 'openItem'],
  data() {
    return {
      displayData: [],
      itemMap: []
    }
  },
  methods: {
    clickHandler(value) {
      const map = this.itemMap.find(map => map.key === value[0])
      if (map) {
        const item = this.items.find(item => item._id === map.id)
        this.openItem(item)
      }
    }
  },
  mounted() {
    const result = createFolderArray(
      this.folders,
      this.items,
      this.itemNameField
    )
    this.displayData = result.displayArray
    this.itemMap = result.itemMap
  },
  watch: {
    // eslint-disable-next-line
    items(newVal, oldVal) {
      const result = createFolderArray(
        this.folders,
        this.items,
        this.itemNameField
      )
      this.displayData = result.displayArray
      this.itemMap = result.itemMap
    },
    // eslint-disable-next-line
    folders(newVal, oldVal) {
      const result = createFolderArray(newVal, this.items, this.itemNameField)
      this.displayData = result.displayArray
      this.itemMap = result.itemMap
    }
  }
}
</script>

<style lang="scss">
.v-treeview-node__root {
  cursor: pointer;
  &:hover {
    background-color: #0d47a1;
  }
}
</style>
