<template>
  <div>
    <v-form @submit.prevent="saveHandler(true)" class="pl-3">
      <v-row>
        <v-col class="pb-0">
          <v-text-field
            rows="1"
            dark
            class="mt-0 mr-auto"
            placeholder="Enter New Checklist Name"
            v-model.trim="checklist.name"
            :class="{ inputError: $v.checklist.name.$error }"
            :error-messages="
              $v.checklist.name.$error
                ? 'Name is Required, and must be at least 4 characters.'
                : ''
            "
            @keydown.enter.prevent="$v.checklist.name.$touch()"
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
              <v-list-item
                @click="openOptions = true"
                v-show="!openOptions && !locked"
              >
                <v-list-item-title dark>Open Options</v-list-item-title>
              </v-list-item>
              <v-list-item
                @click="openOptions = false"
                v-show="openOptions && !locked"
              >
                <v-list-item-title dark>Close Options</v-list-item-title>
              </v-list-item>
              <v-list-item
                @click="editMaster"
                v-show="checklist.sourceMasterId"
              >
                <v-list-item-title>Edit Master Checklist</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn
            type="submit"
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
      <v-row
        v-show="checklist.name && !checklist.sourceMasterId && openOptions"
      >
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
      <v-row v-show="checklist.name && !locked">
        <v-col class="pb-0">
          <v-textarea
            rows="1"
            auto-grow
            dark
            class="pt-0"
            v-model.trim="newItemSubject"
            label="Enter New Item"
            @keydown.enter="addItem"
            @keydown.tab="addItem"
            append-outer-icon="mdi-plus"
            @click:append-outer="addItem"
            :class="{ inputError: $v.newItemSubject.$error }"
            :error-messages="
              $v.newItemSubject.$error
                ? 'Subject must be between 3 and 244 characters.'
                : ''
            "
            @keydown="$v.newItemSubject.$touch()"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-0">
          <draggable
            :list="checklist.items"
            :sort="!locked"
            ghost-class="ghost"
            handle=".v-input__append-outer"
            @start="dragging = true"
            @end="dragging = false"
          >
            <ChecklistItem
              v-for="(item, index) in checklist.items"
              :key="item.key"
              :item="item"
              :locked="locked"
              :class="colorClass(item)"
              @embed-checklist="embedChecklist(item)"
              @open-connection="openConnection"
              @delete-item="deleteItem(index)"
            />
          </draggable>
        </v-col>
      </v-row>
    </v-form>
    <div v-if="!checklist.name" class="pa-2">
      <v-spacer></v-spacer>
      <h2 class="title white--text">Enter a Name in the input above,</h2>
      <p class="body-2 white--text">to start creating a checklist.</p>
      <p class="body-2 white--text">
        Then the New Item prompt will appear. Use that to create checklist
        items.
      </p>
    </div>
    <v-dialog v-model="continueDialog.open" width="500" persistent>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title
          >Continue?</v-card-title
        >

        <v-card-text>
          There are unsaved changes on the form. Do you wish to abandon changes
          and continue with
          <strong>{{ continueDialog.sourceDescription }}</strong
          >, or return to the form?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="danger" @click="dialogContinue">Continue</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="dialogReturn">Return to Form</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import uuidv4 from 'uuid/v4'
import { mapActions, mapGetters } from 'vuex'
import draggable from 'vuedraggable'
import { maxLength, minLength, required } from 'vuelidate/lib/validators'
import ChecklistItem from '@/components/ChecklistItem'
import { continueDialogMixin } from '@/mixins/continueDialog'

export default {
  name: 'Checklist',
  props: ['payload'],
  components: {
    ChecklistItem,
    draggable
  },
  mixins: [continueDialogMixin],
  computed: {
    checklist() {
      return this.payload.checklist
    },
    originalChecklist() {
      return this.payload.originalChecklist
    },
    displayIndex() {
      return this.payload.index
    },
    locked() {
      return this.checklist.masterLocked && this.checklist.sourceMasterId
    },
    ...mapGetters({
      userTags: 'auth/userTags',
      ownerId: 'auth/ownerId',
      getChecklistById: 'checklist/getChecklistById'
    })
  },
  data() {
    return {
      newItemSubject: '',
      dragging: false,
      openOptions: false,
      panelClasses: [
        'primary',
        'primary lighten-1',
        'primary lighten-2',
        'primary darken-1',
        'primary darken-2',
        'primary darken-3',
        'primary darken-4'
      ],
      openItem: {}
    }
  },
  validations: {
    checklist: {
      name: { required, minLength: minLength(4) },
      items: {
        $each: {
          subject: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(244)
          }
        }
      }
    },
    newItemSubject: { minLength: minLength(3), maxLength: maxLength(244) }
  },
  methods: {
    addItem() {
      if (!this.newItemSubject) return false
      let subject = this.newItemSubject.trim()
      if (this.$v.newItemSubject.$error) return false

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
    embedChecklist(item) {
      // create & save embed checklist
      this.save({
        name: this.checklist.name + ' / ' + item.subject,
        ownerId: this.checklist.ownerId,
        tags: this.checklist.tags.length
          ? !this.checklist.tags.find(tag => tag === 'embed')
            ? [...this.checklist.tags, 'embed']
            : []
          : ['embed'],
        parent: {
          resource: 'checklist',
          resourceId: this.checklist._id
        }
      }).then(embedChecklist => {
        // connect it to item
        !item.connections ? (item.connections = []) : true
        item.connections.push({
          resource: 'checklist',
          resourceId: embedChecklist._id
        })
        this.$emit('open-checklist', {
          checklist: embedChecklist,
          index: this.displayIndex + 1
        })
        // save this.checklist without exit
        this.saveHandler(false)
      })
    },
    openConnection(payload) {
      this.openItem = payload
      this.$emit('open-connection', {
        connection: payload.connection,
        index: this.displayIndex + 1
      })
    },
    colorClass(item) {
      let idx =
        this.displayIndex > 5 ? this.displayIndex - 7 : this.displayIndex
      return isEqual(item, this.openItem.item) ? this.panelClasses[idx + 1] : ''
    },
    deleteItem(index) {
      this.checklist.items.splice(index, 1)
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
    saveHandler(clear) {
      this.openOptions = false
      if (!this.$v.$invalid) {
        const newChecklist = { ...this.checklist }
        if (!this.checklist.ownerId) newChecklist.ownerId = this.ownerId
        this.save(newChecklist)
        this.setSelected({ checklist: newChecklist, index: this.displayIndex })
        if (clear) this.clearForm()
        this.$v.$reset()
      } else {
        const notification = {
          type: 'error',
          message: 'ERROR: The Form is invalid.'
        }
        this.notify(notification)
      }
    },
    clearHandler() {
      this.dialogPromise(this.clearHandler, 'Clear the Form', null)
        .then(() => {
          this.clearForm(this.displayIndex)
        })
        .catch(() => {})
    },
    editMaster() {
      this.dialogPromise(this.editMaster, 'Edit Master Checklist', null)
        .then(() => {
          const checklist = this.getChecklistById(this.checklist.sourceMasterId)
          this.setSelected({
            checklist: cloneDeep(checklist),
            index: this.displayIndex
          })
          this.$emit('edit-master', { checklist, index: this.displayIndex })
        })
        .catch(() => {})
    },
    clearForm() {
      this.$emit('clear-form')
    },
    ...mapActions({
      save: 'checklist/save',
      setSelected: 'checklist/setSelected',
      notify: 'notification/add'
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
.inputError {
  border: 1px solid red;
}
</style>
