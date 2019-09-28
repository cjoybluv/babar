<template>
  <v-form @submit.prevent class="pl-3">
    <v-row>
      <v-col class="pb-0">
        <v-text-field
          rows="1"
          dark
          class="mt-0 mr-auto"
          placeholder="Enter New Checklist Name"
          v-model.trim="checklist.name"
          :rules="[rules.minLength(4)]"
        />
      </v-col>
      <v-col cols="2" class="pl-0 pt-5">
        <v-menu class="primray lighten-2">
          <template v-slot:activator="{ on }">
            <v-icon
              dense
              v-on="on"
              dark
              :disabled="!checklist.name"
              class="pt-2 float-right"
              >mdi-dots-vertical</v-icon
            >
          </template>
          <v-list dark color="#1565C0">
            <v-list-item @click="clearHandler">
              <v-list-item-title dark>Clear the Form</v-list-item-title>
            </v-list-item>
            <v-list-item @click="openOptions = true" v-show="!openOptions">
              <v-list-item-title dark>Open Options</v-list-item-title>
            </v-list-item>
            <v-list-item @click="openOptions = false" v-show="openOptions">
              <v-list-item-title dark>Close Options</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn
          @click="saveHandler"
          text
          dark
          :disabled="!checklist.name"
          min-width="24"
          class="pl-0 pr-0 float-right"
        >
          <v-icon dense dark>mdi-content-save</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-show="checklist.name && !checklist.sourceMasterId && openOptions">
      <v-col cols="12" md="6" class="pt-0 pb-0">
        <v-checkbox
          dark
          class="mt-0"
          v-model="checklist.masterChecklist"
          label="Master Checklist"
        />
      </v-col>
      <v-col cols="12" md="6" class="pt-0 pb-0">
        <v-checkbox
          :disabled="!checklist.masterChecklist"
          dark
          class="mt-0"
          v-model="checklist.masterLocked"
          label="Locked"
        />
      </v-col>
    </v-row>
    <v-row v-show="checklist.name && openOptions">
      <v-col cols="11" class="mt-2 py-0">
        <v-combobox
          placeholder="Enter/Select Tag(s)"
          v-model="checklist.tags"
          @input="tagIConv"
          :items="userTags"
          chips
          multiple
          clearable
          dark
        ></v-combobox>
      </v-col>
    </v-row>
    <v-row v-show="checklist.name && !checklist.sourceMasterId">
      <v-col class="pb-0">
        <v-textarea
          rows="1"
          auto-grow
          dark
          class="pt-0"
          v-model.trim="newItemSubject"
          :rules="[rules.minLength(4), rules.maxLength(244)]"
          label="Enter New Item"
          @keydown.enter="addItem"
          append-outer-icon="mdi-plus"
          @click:append-outer="addItem"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0">
        <draggable
          :list="checklist.items"
          ghost-class="ghost"
          handle=".v-input__append-outer"
          @start="dragging = true"
          @end="dragging = false"
        >
          <ChecklistItem
            v-for="item in checklist.items"
            :key="item.key"
            :item="item"
          />
        </draggable>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import uuidv4 from 'uuid/v4'
import { mapActions, mapGetters } from 'vuex'
import draggable from 'vuedraggable'
import ChecklistItem from '@/components/ChecklistItem'

export default {
  name: 'Checklist',
  components: {
    ChecklistItem,
    draggable
  },
  computed: {
    checklist() {
      return this.$store.state.checklist.selectedChecklist
    },
    ...mapGetters({ userTags: 'auth/userTags', ownerId: 'auth/ownerId' })
  },
  data() {
    return {
      newItemSubject: '',
      dragging: false,
      openOptions: false,
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
    addItem() {
      if (!this.newItemSubject) return false
      let subject = this.newItemSubject.trim()
      if (subject.length < 4 || subject.length > 244) return false

      let cleanSubject
      if (subject.charAt(subject.length - 1) === String.fromCharCode(10)) {
        cleanSubject = subject.substring(0, subject.length - 1)
      } else {
        cleanSubject = subject
      }
      if (cleanSubject) {
        if (!this.checklist.items) this.checklist.items = []
        this.checklist.items.push({
          key: uuidv4(),
          subject: cleanSubject,
          completed: false
        })
      }
      this.newItemSubject = null
    },
    tagIConv(v) {
      if (!v.length || !this.userTags.length) return false
      v.forEach((value, idx) => {
        let userTag = this.userTags.find(
          tag => tag.toUpperCase() === value.toUpperCase() && tag !== value
        )
        if (userTag) {
          v[idx] = userTag
          this.checklist.tags[idx] = userTag
        }
      })
      return true
    },
    saveHandler() {
      this.openOptions = false
      if (this.checklist.name) {
        const newChecklist = { ...this.checklist }
        if (!this.checklist.ownerId) newChecklist.ownerId = this.ownerId
        this.save(this.checklist)
      }
    },
    clearHandler() {
      this.openOptions = false
      this.clearForm()
    },
    ...mapActions({
      save: 'checklist/save',
      clearForm: 'checklist/clearForm'
    })
  }
}
</script>

<style>
.v-input__slot {
  margin-bottom: 0 !important;
}
.v-select-list .v-list-item:hover {
  background-color: #eee;
}
.theme--dark.error--text {
  color: #fce4ec !important;
}
</style>
