<template>
  <div>
    <v-select
      :items="treeView.selectOptions"
      label="Select Header Field"
      v-model="treeView.headerField"
      @input="sortTreeView"
      dark
    />
    <v-treeview
      :items="treeViewItems"
      item-key="key"
      @update:active="itemClicked"
      activatable
      dark
      dense
      color="white"
    ></v-treeview>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ItemSelector',
  props: ['payload'],
  data() {
    return {
      items: [],
      clickHandler: null,
      treeView: {
        selectOptions: [
          { value: 'status', text: 'By Status' },
          { value: 'primaryTag', text: 'By Primary Tag' }
        ],
        headerField: ''
      }
    }
  },
  computed: {
    selectedHeaderField() {
      return this.$store.state.treeView.selectedHeaderField
    },
    treeViewItems() {
      return this.$store.state.treeView.items
    },
    treeViewItemMap() {
      return this.$store.state.treeView.itemMap
    }
  },
  methods: {
    sortTreeView() {
      this.updateTreeView(this.treeView.headerField)
    },
    itemClicked(value) {
      this.clickHandler(value)
    },
    ...mapActions({
      updateTreeView: 'checklist/updateTreeViewDisplay'
    })
  },
  mounted() {
    this.items = this.payload.items
    this.clickHandler = this.payload.clickHandler
    this.treeView.headerField = this.selectedHeaderField
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
