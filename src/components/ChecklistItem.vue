<template>
  <v-row>
    <v-col cols="1" class="pt-0">
      <v-checkbox dark class="mt-0 pt-0" v-model="item.completed"></v-checkbox>
    </v-col>
    <v-col
      class="pa-0 pr-5"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <p v-if="!hover" class="white--text">{{ item.subject }}</p>
      <v-textarea
        v-else
        rows="1"
        auto-grow
        dark
        append-outer-icon="mdi-cursor-move"
        class="pt-0"
        v-model="item.subject"
        @input="subjectRules"
        :rules="[rules.minLength(4), rules.maxLength(244)]"
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
      hover: false,
      rules: {
        minLength: len => v => {
          return (
            !v ||
            (v || '').length >= len ||
            `Invalid character length, required minimum ${len}`
          )
        },
        maxLength: len => v => {
          return (
            (v || '').length <= len ||
            `Invalid character length, required maximum ${len}`
          )
        }
      }
    }
  },
  methods: {
    subjectRules(v) {
      if (v.length <= 4 || v.length >= 244) {
        console.log('subjectRules', v)
        return false
      }
    }
  }
}
</script>

<style lang="scss">
.v-textarea textarea {
  padding: 0;
}
.v-input__append-outer {
  cursor: move;
}
.sortable-chosen {
  z-index: 10;
  border: 1px dashed lightgray;
  background-color: #1e88e5;
}
</style>
