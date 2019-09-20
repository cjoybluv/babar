<template>
  <v-treeview
    :items="displayData"
    item-key="key"
    @update:active="test"
    activatable
    dark
    dense
    color="white"
  ></v-treeview>
</template>

<script>
import { mapGetters } from 'vuex'

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
    test(value) {
      const itemId = this.itemMap.find(map => map.key === value[0]).id
      const checklist = this.checklists.find(
        checklist => checklist._id === itemId
      )
      // eslint-disable-next-line
      console.log('test', value[0], itemId, checklist)
    },
    createDisplayArray(folders, items) {
      let key = 0
      let displayArray = []
      let itemMap = []

      folders.forEach(folder => {
        displayArray.push({
          key: key,
          id: null,
          name: folder,
          children: [],
          folder: true
        })
        key++
      })
      items.forEach(item => {
        if (item.folderName) {
          let idx = displayArray.findIndex(folder => {
            return folder.name === item.folderName
          })
          if (idx !== -1) {
            displayArray[idx].children.push({
              key: key,
              id: item._id,
              name: item.title,
              folder: false
            })
            itemMap.push({
              key,
              id: item._id
            })
            key++
          } else {
            displayArray.push({
              key: key,
              id: item._id,
              name: item.title,
              folder: false
            })
            itemMap.push({
              key,
              id: item._id
            })
            key++
          }
        } else {
          displayArray.push({
            key: key,
            id: item._id,
            name: item.title,
            children: [],
            folder: false
          })
          itemMap.push({
            key,
            id: item._id
          })
          key++
        }
      })
      displayArray
        .sort((a, b) => {
          if (a.name > b.name) {
            return 0
          } else {
            return -1
          }
        })
        .sort((a, b) => {
          if (a.folder > b.folder) {
            return -1
          } else {
            return 0
          }
        })
      displayArray.forEach(folder => {
        return folder.children.sort((a, b) => {
          if (a.itemName > b.itemName) {
            return 0
          } else {
            return -1
          }
        })
      })

      if (this.retainToggles && this.retainToggles.length) {
        this.retainToggles.forEach(toggle => {
          const idx = displayArray.findIndex(rootItem => {
            return rootItem.itemName === toggle.itemName
          })
          displayArray[idx].childrenToggle = toggle.childrenToggle
        })
      }

      return { displayArray, itemMap }
    }
  },
  mounted() {
    const result = this.createDisplayArray(this.userFolders, this.checklists)
    this.displayData = result.displayArray
    this.itemMap = result.itemMap
  },
  watch: {
    userFolders(newVal, oldVal) {
      const result = this.createDisplayArray(this.userFolders, this.checklists)
      this.displayData = result.displayArray
      this.itemMap = result.itemMap
    },
    checklists(newVal, oldVal) {
      const result = this.createDisplayArray(this.userFolders, this.checklists)
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
