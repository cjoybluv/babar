<template>
  <v-treeview
    :items="folderArray"
    item-key="key"
    @update:active="clickHandler"
    activatable
    dark
    dense
    color="white"
  ></v-treeview>
</template>

<script>
export default {
  name: 'FolderDisplay',
  props: ['openItem'],
  data() {
    return {
      lastItemOpened: {}
    }
  },
  computed: {
    folderArray() {
      return this.$store.state.checklist.folderArray
    },
    itemMap() {
      return this.$store.state.checklist.itemMap
    },
    checklists() {
      return this.$store.state.checklist.checklists
    }
  },
  methods: {
    clickHandler(value) {
      if (value.length) {
        const map = this.itemMap.find(map => map.key === value[0])
        if (map) {
          const checklist = this.checklists.find(
            checklist => checklist._id === map.id
          )
          this.lastItemOpened = checklist
          this.openItem(checklist)
        }
      } else {
        this.openItem(this.lastItemOpened)
        const checklist = this.checklists.find(
          checklist => checklist._id === this.lastItemOpened._id
        )
        this.lastItemOpened = checklist
        this.openItem(checklist)
      }
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
