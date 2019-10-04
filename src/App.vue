<template>
  <v-app resize="onResize">
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="d-flex flex-grow-1 justify-space-between">
        <v-icon @click="drawer = !drawer">mdi-menu</v-icon>
        <div class="d-flex">
          <h1>ljunda</h1>
          <v-img
            :src="require('@/assets/ljundaLogo.png')"
            width="35"
            height="36"
            class="ma-4"
          ></v-img>
        </div>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-account</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.fullName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="link in links"
          :key="link.label"
          link
          :to="link.url"
        >
          <v-list-item-content>
            <v-list-item-title>{{ link.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <NotificationContainer />
      <router-view></router-view>
    </v-content>
    <v-footer color="primary lighten-1" class="d-none d-sm-flex" padless>
      <v-layout justify-center wrap>
        <v-flex primary lighten-2 py-4 text-center white--text xs12>
          {{ new Date().getFullYear() }} —
          <strong>ljunda</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import NotificationContainer from '@/components/NotificationContainer'
export default {
  name: 'App',
  components: {
    NotificationContainer
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0
      },
      drawer: false,
      links: [
        {
          label: 'Login',
          url: '/login'
        },
        {
          label: 'Checklists',
          url: '/checklists'
        }
      ]
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    }
  },
  methods: {
    onResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    }
  },
  mounted() {
    this.onResize()
  }
}
</script>

<style lang="scss">
.display-3 {
  height: 72px;
  line-height: 4rem !important;
}
</style>
