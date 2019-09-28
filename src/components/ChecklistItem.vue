<template>
  <v-row>
    <v-col cols="1" class="pt-0">
      <v-checkbox dark class="mt-0 pt-0" v-model="item.completed"></v-checkbox>
    </v-col>
    <v-col
      class="pa-0 pr-5"
      @mouseover="
        hover = true
        $v.item.subject.$touch()
      "
      @mouseleave="hover = false"
    >
      <p v-show="!hover && !$v.item.subject.$error" class="white--text">
        {{ item.subject }}
      </p>
      <v-textarea
        v-show="hover || $v.item.subject.$error"
        rows="1"
        auto-grow
        dark
        append-outer-icon="mdi-cursor-move"
        class="pt-0"
        v-model="item.subject"
        :class="{ inputError: $v.item.subject.$error }"
        :error-messages="
          $v.item.subject.$error
            ? 'Subject is Required, and must be between 4 and 244 characters.'
            : ''
        "
      />
    </v-col>
  </v-row>
</template>

<script>
import { maxLength, minLength, required } from 'vuelidate/lib/validators'

export default {
  name: 'ChecklistItem',
  props: ['item'],
  data() {
    return {
      hover: false
    }
  },
  validations: {
    item: {
      subject: { maxLength: maxLength(244), minLength: minLength(4), required }
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
