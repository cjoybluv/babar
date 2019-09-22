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
          <FolderDisplay
            :folders="userFolders"
            :items="checklists"
            itemNameField="title"
            :openItem="openChecklist"
          />
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet
          tile
          class="primary lighten-1"
          :min-height="window.height - window.heightReduction"
        >
          <Checklist />
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
    ...mapGetters({ userFolders: 'auth/userFolders', user: 'auth/user' })
  },
  methods: {
    openChecklist(checklist) {
      this.editChecklist(checklist)
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

  // beforeRouteEnter(routeTo, routeFrom, next) {
  //   getChecklists(routeTo, next, this.ownerId)
  // },
  // beforeRouteUpdate(routeTo, routeFrom, next) {
  //   getPageEvents(routeTo, next)
  // },
}
</script>
