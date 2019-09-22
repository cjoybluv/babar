<template>
  <v-row :class="{ rearranging: rearranging }">
    <v-col cols="1" class="pt-0">
      <v-checkbox dark class="mt-0 pt-0" v-model="item.completed"></v-checkbox>
    </v-col>
    <v-col class="pa-0" @mouseover="hover = true" @mouseleave="hover = false">
      <p v-if="!hover || rearranging" class="white--text">{{ item.subject }}</p>
      <v-textarea
        v-if="hover && !rearranging"
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
  props: ['item', 'rearranging'],
  data() {
    return {
      hover: false
    }
  },
  watch: {
    rearranging(newVal, oldVal) {
      if (newVal != oldVal) this.rearranging = newVal
    }
  }
}
</script>

<style lang="scss">
.v-textarea textarea {
  padding: 0;
}
.rearranging {
  cursor: move;
}
</style>
