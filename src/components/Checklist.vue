<template>
  <v-form class="pl-3">
    <v-row>
      <v-col cols="11" class="pb-0">
        <v-text-field
          dark
          class="mt-0"
          placeholder="Enter New Checklist Title"
          v-model="checklist.title"
        />
      </v-col>
      <v-col cols="1" class="pl-0 pt-5">
        <v-btn
          @click="saveHandler"
          text
          dark
          :disabled="!checklist.title"
          min-width="24"
          class="pl-0 pr-0"
        >
          <v-icon dark>mdi-content-save</v-icon>
        </v-btn>
        <v-menu class="primray lighten-2">
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" dark>mdi-dots-vertical</v-icon>
          </template>
          <v-list>
            <v-list-item @click="clearForm">
              <v-list-item-title dark>Clear the Form</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <v-row v-if="checklist.title && !checklist.sourceMasterId">
      <v-col cols="12" class="pt-0 pb-0">
        <v-checkbox
          dark
          class="mt-0"
          v-model="checklist.masterChecklist"
          label="Master Checklist"
        />
      </v-col>
    </v-row>
    <v-row v-if="checklist.title">
      <v-col class="mt-2 pt-0 pb-0">
        <v-select
          dark
          class="pt-0"
          label="Folder"
          v-model="checklist.folderName"
          :items="folderOptions"
        />
      </v-col>
    </v-row>
    <v-row v-if="checklist.title">
      <v-col class="pb-0">
        <v-textarea
          rows="1"
          auto-grow
          dark
          class="pt-0"
          v-model="newItemSubject"
          label="Enter New Item"
          @change="addItem"
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
      return this.$store.state.checklist.currentChecklist
    },
    folderOptions() {
      return ['<ROOT>', ...this.userFolders]
    },
    ...mapGetters({ userFolders: 'auth/userFolders', ownerId: 'auth/ownerId' })
  },
  data() {
    return {
      newItemSubject: '',
      dragging: false
    }
  },
  methods: {
    addItem() {
      this.newItemSubject = this.newItemSubject.trimEnd()
      if (this.newItemSubject) {
        if (this.checklist.items) {
          this.checklist.items.push({
            key: this.checklist.items.length + 1,
            subject: this.newItemSubject,
            completed: false
          })
        } else {
          this.checklist.items = [
            {
              key: 1,
              subject: this.newItemSubject,
              completed: false
            }
          ]
        }
      }
      this.newItemSubject = ''
    },
    saveHandler() {
      if (this.checklist.title) {
        const newChecklist = { ...this.checklist }
        if (!this.checklist.ownerId) newChecklist.ownerId = this.ownerId
        if (this.checklist.folderName === '<ROOT>') {
          newChecklist.folderName = ''
        }
        this.save(this.checklist).then(() => this.clearForm())
      }
    },
    clearForm() {
      this.clearCurrentChecklist()
    },
    ...mapActions({
      save: 'checklist/save',
      clearCurrentChecklist: 'checklist/clearCurrent'
    })
  }
}
</script>

<style>
.v-input__slot {
  margin-bottom: 0 !important;
}
</style>
