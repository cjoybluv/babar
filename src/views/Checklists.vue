<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" sm="5" md="3">
        <v-sheet
          tile
          :min-height="window.height - window.heightReduction"
          class="primary"
        >
          <v-spacer></v-spacer>
          <v-treeview
            :items="treeViewItems"
            item-key="key"
            @update:active="clickHandler"
            activatable
            dark
            dense
            color="white"
          ></v-treeview>
          <!-- <TreeViewDisplay itemType="checklist" :items="checklists" :openItem="openChecklist" /> -->
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="7" md="5">
        <v-sheet
          tile
          class="primary lighten-1"
          :min-height="window.height - window.heightReduction"
        >
          <Checklist :checklist="selectedChecklist" />
        </v-sheet>
      </v-col>
      <v-col cols="12" md="4">
        <v-sheet
          tile
          :min-height="window.height - window.heightReduction"
          class="primary lighten-2"
        ></v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
import { mapGetters, mapActions } from 'vuex'

import Checklist from '@/components/Checklist'

export default {
  name: 'checklists',
  components: {
    Checklist
  },
  data() {
    return {
      lastItemOpened: {},
      window: {
        width: 0,
        height: 0,
        heightReduction: 0
      }
    }
  },
  computed: {
    checklists() {
      return this.$store.state.checklist.checklists
    },
    selectedChecklist() {
      return this.$store.state.checklist.selectedChecklist
    },
    treeViewItems() {
      return this.$store.state.treeView.items
    },
    treeViewItemMap() {
      return this.$store.state.treeView.itemMap
    },
    ...mapGetters({ user: 'auth/user' })
  },
  methods: {
    clickHandler(value) {
      if (value.length) {
        const map = this.treeViewItemMap.find(map => map.key === value[0])
        if (map) {
          const checklist = this.checklists.find(
            checklist => checklist._id === map.id
          )
          this.lastItemOpened = checklist
          this.openChecklist(checklist)
        }
      } else {
        this.openChecklist(this.lastItemOpened)
        const checklist = this.checklists.find(
          checklist => checklist._id === this.lastItemOpened._id
        )
        this.lastItemOpened = checklist
        this.openChecklist(checklist)
      }
    },
    openChecklist(checklist) {
      let selectedChecklist
      if (checklist.masterChecklist) {
        let today = new Date(Date.now())
        let nameDateTime =
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
        selectedChecklist = cloneDeep({
          ...checklist,
          masterChecklist: false,
          tags: checklist.tags[0] ? checklist.tags[0] : 'Log',
          sourceMasterId: checklist._id,
          name: nameDateTime + ' / ' + checklist.name
        })
        delete selectedChecklist._id
      } else {
        selectedChecklist = cloneDeep(checklist)
      }
      this.editChecklist(selectedChecklist)
    },
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    ...mapActions({
      updatedUser: 'auth/updateUser',
      editChecklist: 'checklist/edit'
    })
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss">
.v-sheet > .spacer {
  height: 1rem;
}
.v-treeview-node__root {
  cursor: pointer;
  &:hover {
    background-color: #0d47a1;
  }
}
</style>
