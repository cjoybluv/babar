<template>
  <div>
    <v-row no-gutters>
      <v-col cols="3">
        <v-sheet
          tile
          :min-height="window.height - window.heightReduction"
          class="primary"
        >
          <v-text-field
            dark
            filled
            label="Create a New Folder"
            v-model="newFolderName"
            append-icon="mdi-plus"
            @click:append="createFolder"
          />
          <FolderDisplay :openItem="openChecklist" />
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet
          tile
          class="primary lighten-1"
          :min-height="window.height - window.heightReduction"
        >
          <Checklist :checklist="selectedChecklist" />
        </v-sheet>
      </v-col>
      <v-col cols="3">
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

import FolderDisplay from '@/components/FolderDisplay'
import Checklist from '@/components/Checklist'

export default {
  name: 'checklists',
  components: {
    FolderDisplay,
    Checklist
  },
  data() {
    return {
      newFolderName: '',
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
    ...mapGetters({ userFolders: 'auth/userFolders', user: 'auth/user' })
  },
  methods: {
    openChecklist(checklist) {
      let selectedChecklist
      if (checklist.masterChecklist) {
        let today = new Date(Date.now())
        let titleDateTime =
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
          folderName: checklist.folderName ? checklist.folderName : 'Log',
          sourceMasterId: checklist._id,
          title: titleDateTime + ' / ' + checklist.title
        })
        delete selectedChecklist._id
      } else {
        selectedChecklist = cloneDeep(checklist)
      }
      this.editChecklist(selectedChecklist)
    },
    createFolder() {
      if (this.newFolderName) {
        let updatedUser = { ...this.user }
        if (this.user.folders) {
          updatedUser.folders.push(this.newFolderName)
        } else {
          updatedUser.folders = [this.newFolderName]
        }
        this.updatedUser(updatedUser)
        this.newFolderName = ''
      }
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
