<template>
  <v-row class="checklistItem">
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
      <v-row class="ml-2 ml-sm-0">
        <v-col cols="11" class="pa-0">
          <p
            v-show="locked || (!hover && !$v.item.subject.$error)"
            class="white--text"
          >
            {{ item.subject }}
          </p>
          <v-textarea
            v-show="!locked && (hover || $v.item.subject.$error)"
            rows="1"
            auto-grow
            dark
            append-outer-icon="mdi-cursor-move"
            class="pt-0"
            v-model="item.subject"
            :class="{ inputError: $v.item.subject.$error }"
            :error-messages="
              $v.item.subject.$error
                ? 'Subject is Required, and must be between 3 and 244 characters.'
                : ''
            "
          />
        </v-col>
        <v-col class="pa-0" v-show="hover && !locked">
          <v-menu class="primray lighten-2">
            <template v-slot:activator="{ on }">
              <v-icon dense v-on="on" dark class="pt-2"
                >mdi-dots-vertical</v-icon
              >
            </template>
            <v-list dark color="#1565C0">
              <v-list-item @click="embedChecklist">
                <v-list-item-title dark>Embed New Checklist</v-list-item-title>
              </v-list-item>
              <v-list-item @click="deleteItem">
                <v-list-item-title dark>Delete Item</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { maxLength, minLength, required } from 'vuelidate/lib/validators'

export default {
  name: 'ChecklistItem',
  props: ['item', 'locked'],
  data() {
    return {
      hover: true
    }
  },
  validations: {
    item: {
      subject: { minLength: minLength(3), maxLength: maxLength(244), required }
    }
  },
  methods: {
    embedChecklist() {
      this.$emit('embed-checklist')
    },
    deleteItem() {
      this.$emit('delete-item', this.item)
    }
  }
}
</script>

<style lang="scss">
.checklistItem {
  & .v-textarea textarea {
    padding: 0;
  }
  & .v-input__append-outer {
    cursor: move;
  }
  & .sortable-chosen {
    z-index: 10;
    border: 1px dashed lightgray;
    background-color: #1e88e5;
  }
  & .mdi-cursor-move,
  .mdi-dots-vertical {
    font-size: 1rem !important;
  }
}
</style>
