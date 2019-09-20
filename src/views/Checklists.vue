<template>
  <div>
    <v-row no-gutters>
      <v-col cols="3">
        <v-sheet tile class="primary">
          <v-text-field
            dark
            filled
            label="Create a New Folder"
            v-model="newFolderName"
            append-icon="mdi-plus"
            @click:append="createFolder"
          />
          <FolderDisplay
            :folders="userFolders"
            :items="checklists"
            itemNameField="title"
            :openItem="openChecklist"
          />
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet tile class="primary lighten-2"></v-sheet>
      </v-col>
      <v-col cols="3">
        <v-sheet tile class="primary lighten-4"></v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FolderDisplay from '@/components/FolderDisplay.vue'

export default {
  name: 'checklists',
  components: {
    FolderDisplay
  },
  data() {
    return {
      newFolderName: ''
    }
  },
  computed: {
    checklists() {
      return this.$store.state.checklist.checklists
    },
    ...mapGetters({ userFolders: 'auth/userFolders', user: 'auth/user' })
  },
  methods: {
    openChecklist(checklist) {
      console.log('openChecklist', checklist)
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
    ...mapActions({ updatedUser: 'auth/updateUser' })
  }

  // beforeRouteEnter(routeTo, routeFrom, next) {
  //   getChecklists(routeTo, next, this.ownerId)
  // },
  // beforeRouteUpdate(routeTo, routeFrom, next) {
  //   getPageEvents(routeTo, next)
  // },
}
</script>
