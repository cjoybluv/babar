<template>
  <div>
    <v-row no-gutters>
      <v-col cols="3">
        <v-sheet tile height="580" class="primary">
          <FolderDisplay
            :folders="userFolders"
            :items="checklists"
            itemNameField="title"
            :openItem="openChecklist"
          />
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet tile height="580" class="primary lighten-2"></v-sheet>
      </v-col>
      <v-col cols="3">
        <v-sheet tile height="580" class="primary lighten-4"></v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FolderDisplay from '@/components/FolderDisplay.vue'

export default {
  name: 'checklists',
  components: {
    FolderDisplay
  },
  computed: {
    checklists() {
      return this.$store.state.checklist.checklists
    },
    ...mapGetters({ userFolders: 'auth/userFolders' })
  },
  methods: {
    openChecklist(checklist) {
      console.log('openChecklist', checklist)
    }
  }

  // beforeRouteEnter(routeTo, routeFrom, next) {
  //   getChecklists(routeTo, next, this.ownerId)
  // },
  // beforeRouteUpdate(routeTo, routeFrom, next) {
  //   getPageEvents(routeTo, next)
  // },
}
</script>
