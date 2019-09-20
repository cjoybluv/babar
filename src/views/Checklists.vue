<template>
  <div>
    <v-row no-gutters>
      <v-col cols="3">
        <v-sheet tile height="580" class="primary">
          <FolderDisplay />
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
import { mapState } from 'vuex'
import FolderDisplay from '@/components/FolderDisplay.vue'
// import store from '@/store/store'

// function getChecklists(routeTo, next, ownerId) {
//   console.log('getChecklists', ownerId)
//   store.dispatch('checklist/fetchAll', { ownerId }).then(() => {
//     next()
//   })
// }

export default {
  name: 'checklists',
  components: {
    FolderDisplay
  },
  computed: mapState(['checklist'])

  // beforeRouteEnter(routeTo, routeFrom, next) {
  //   getChecklists(routeTo, next, this.ownerId)
  // },
  // beforeRouteUpdate(routeTo, routeFrom, next) {
  //   getPageEvents(routeTo, next)
  // },
}
</script>
