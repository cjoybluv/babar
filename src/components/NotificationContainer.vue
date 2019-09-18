<template>
  <div class="notification-container info lighten-4">
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationBar from '@/components/NotificationBar.vue'
import { mapState } from 'vuex'

export default {
  components: {
    NotificationBar
  },
  computed: mapState('notification', ['notifications'])
}
</script>

<style scoped>
.notification-container {
  z-index: 10;
  position: fixed;
  bottom: 0;
  right: 0;
  padding-right: 40px;
  border: 1px solid lightgray;
}
</style>
