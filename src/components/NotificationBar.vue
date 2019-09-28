<template>
  <div class="notification-bar white--text" :class="notification.type">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null,
      delay: {
        info: 3000,
        success: 3000,
        error: 6000
      }
    }
  },
  mounted() {
    this.timeout = setTimeout(
      () => this.remove(this.notification),
      this.delay[this.notification.type]
    )
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  methods: mapActions('notification', ['remove'])
}
</script>

<style scoped>
.notification-bar {
  min-height: 3em;
  font-weight: bold;
  margin: 0.5em 0.75em 0.5em 0;
  padding: 0 1em;
}
p {
  padding: 0.75em 0 0 0;
}
</style>
