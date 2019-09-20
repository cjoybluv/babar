<template>
  <v-treeview
    :items="displayData"
    item-key="key"
    @update:active="openItem"
    activatable
    dark
    dense
    color="white"
  ></v-treeview>
</template>

<script>
import { mapGetters } from 'vuex'
import { createFolderArray } from '@/helpers/displayHelpers'

export default {
  data() {
    return {
      displayData: [],
      itemMap: []
    }
  },
  computed: {
    checklists() {
      return this.$store.state.checklist.checklists
    },
    ...mapGetters({ userFolders: 'auth/userFolders' })
  },
  methods: {
    openItem(value) {
      const item = this.itemMap.find(map => map.key === value[0])
      if (item) {
        const checklist = this.checklists.find(
          checklist => checklist._id === item.id
        )
        // eslint-disable-next-line
        console.log('test', value[0], item.id, checklist)
      }
    }
  },
  mounted() {
    const result = createFolderArray(this.userFolders, this.checklists)
    this.displayData = result.displayArray
    this.itemMap = result.itemMap
  },
  watch: {
    userFolders() {
      const result = createFolderArray(this.userFolders, this.checklists)
      this.displayData = result.displayArray
      this.itemMap = result.itemMap
    },
    checklists() {
      const result = createFolderArray(this.userFolders, this.checklists)
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
