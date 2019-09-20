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

        <v-icon dark>mdi-dots-vertical</v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="pt-0 pb-0">
        <v-checkbox
          dark
          class="mt-0"
          v-model="checklist.masterChecklist"
          label="Master Checklist"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mt-2 pt-0 pb-0">
        <v-select
          dark
          class="pt-0"
          label="Folder"
          v-model="checklist.folderName"
          :items="userFolders"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pb-0">
        <v-text-field
          dark
          class="pt-0"
          v-model="newItemSubject"
          label="Enter New Item"
          @change="addItem"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0">
        <v-checkbox
          v-for="item in checklist.items"
          :key="item.key"
          class="mt-0 mb-0 pt-0 pb-0"
          dark
          :label="item.subject"
          v-model="item.completed"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Checklist',
  computed: {
    checklist() {
      return this.$store.state.checklist.currentChecklist
    },
    ...mapGetters({ userFolders: 'auth/userFolders', ownerId: 'auth/ownerId' })
  },
  data() {
    return {
      newItemSubject: ''
    }
  },
  methods: {
    addItem() {
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
      this.newItemSubject = ''
    },
    saveHandler() {
      if (this.checklist.title) {
        if (!this.checklist.ownerId) this.checklist.ownerId = this.ownerId
        this.save(this.checklist)
        this.checklist = {}
      }
    },
    ...mapActions({ save: 'checklist/save' })
  }
}
</script>

<style>
.v-input__slot {
  margin-bottom: 0 !important;
}
</style>
