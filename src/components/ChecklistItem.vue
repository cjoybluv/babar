<template>
  <v-row>
    <v-col cols="1" class="pt-0">
      <v-checkbox dark class="mt-0 pt-0" v-model="item.completed"></v-checkbox>
    </v-col>
    <v-col class="pa-0" @mouseover="hover = true" @mouseleave="hover = false">
      <p v-if="!hover" class="white--text">{{ item.subject }}</p>
      <v-textarea
        v-if="hover"
        rows="1"
        auto-grow
        dark
        class="pt-0"
        v-model="item.subject"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ChecklistItem',
  props: ['item'],
  data() {
    return {
      hover: false
    }
  }
}
</script>

<style lang="scss">
.v-textarea textarea {
  padding: 0;
}
</style>
