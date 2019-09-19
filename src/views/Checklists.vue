<template>
  <div>
    <h1>Checklists</h1>
    <ul>
      <li v-for="checklist in checklist.checklists" :key="checklist._id">
        {{ checklist.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import store from '@/store/store'

// function getChecklists(routeTo, next, ownerId) {
//   console.log('getChecklists', ownerId)
//   store.dispatch('checklist/fetchAll', { ownerId }).then(() => {
//     next()
//   })
// }

export default {
  name: 'checklists',
  computed: mapState(['checklist'])

  // beforeRouteEnter(routeTo, routeFrom, next) {
  //   getChecklists(routeTo, next, this.ownerId)
  // },
  // beforeRouteUpdate(routeTo, routeFrom, next) {
  //   getPageEvents(routeTo, next)
  // },
}
</script>
