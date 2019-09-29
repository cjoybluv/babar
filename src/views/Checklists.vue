<template>
  <div>
    <v-row no-gutters class="d-none d-sm-flex">
      <v-col cols="12" sm="5" md="3">
        <v-sheet
          tile
          :min-height="window.height - window.heightReduction"
          class="primary"
          v-if="checklists.length"
        >
          <v-spacer></v-spacer>
          <v-select
            :items="treeView.selectOptions"
            label="Select Header Field"
            v-model="treeView.headerField"
            @input="sortTreeView"
            dark
          />
          <v-treeview
            :items="treeViewItems"
            item-key="key"
            @update:active="clickHandler"
            activatable
            dark
            dense
            color="white"
          ></v-treeview>
        </v-sheet>
        <v-sheet
          tile
          :min-height="window.height - window.heightReduction"
          v-if="!checklists.length"
          class="primary pa-2"
        >
          <h1 class="headline white--text">Welcome to Checklists</h1>
          <v-spacer></v-spacer>
          <p class="body-2 white--text">
            After you have saved checklists, they will be displayed in this
            panel.
          </p>
          <p class="body-2 white--text">
            Use the panel to the right to create a checklist.
          </p>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="7" md="5">
        <v-sheet
          tile
          class="primary lighten-1"
          :min-height="window.height - window.heightReduction"
        >
          <Checklist :checklist="selectedChecklist" />
        </v-sheet>
      </v-col>
      <v-col cols="12" md="4">
        <v-sheet
          tile
          :min-height="window.height - window.heightReduction"
          class="primary lighten-2"
        ></v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters class="d-flex d-sm-none">
      <v-carousel
        v-model="carousel.position"
        :show-arrows="false"
        dark
        hide-delimiter-background
      >
        <v-carousel-item>
          <v-sheet
            tile
            :min-height="window.height - window.heightReduction"
            class="primary"
            v-if="checklists.length"
          >
            <v-spacer></v-spacer>
            <v-select
              :items="treeView.selectOptions"
              label="Select Header Field"
              v-model="treeView.headerField"
              @input="sortTreeView"
              dark
            />
            <v-treeview
              :items="treeViewItems"
              item-key="key"
              @update:active="clickHandler"
              activatable
              dark
              dense
              color="white"
            ></v-treeview>
          </v-sheet>
          <v-sheet
            tile
            :min-height="window.height - window.heightReduction"
            v-if="!checklists.length"
            class="primary pa-2"
          >
            <h1 class="headline white--text">Welcome to Checklists</h1>
            <v-spacer></v-spacer>
            <p class="body-2 white--text">
              After you have saved checklists, they will be displayed in this
              panel.
            </p>
            <p class="body-2 white--text">
              Use the panel to the right to create a checklist.
            </p>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet
            tile
            class="primary lighten-1"
            :min-height="window.height - window.heightReduction"
          >
            <Checklist
              :checklist="selectedChecklist"
              @move-carousel="moveCarousel"
            />
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>
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
import cloneDeep from 'lodash/cloneDeep'
import isEqual from 'lodash/isEqual'
import { mapGetters, mapActions } from 'vuex'

import Checklist from '@/components/Checklist'
import { continueDialogMixin } from '@/mixins/continueDialog'

export default {
  name: 'checklists',
  components: {
    Checklist
  },
  mixins: [continueDialogMixin],
  data() {
    return {
      treeView: {
        selectOptions: [
          { value: 'status', text: 'By Status' },
          { value: 'primaryTag', text: 'By Primary Tag' }
        ],
        headerField: ''
      },
      carousel: {
        position: 0
      },
      lastItemOpened: {},
      window: {
        width: 0,
        height: 0,
        heightReduction: 0
      }
    }
  },
  computed: {
    checklists() {
      return this.$store.state.checklist.checklists
    },
    selectedChecklist() {
      return this.$store.state.checklist.selectedChecklist
    },
    originalChecklist() {
      return this.$store.state.checklist.originalChecklist
    },
    selectedHeaderField() {
      return this.$store.state.treeView.selectedHeaderField
    },
    treeViewItems() {
      return this.$store.state.treeView.items
    },
    treeViewItemMap() {
      return this.$store.state.treeView.itemMap
    },
    ...mapGetters({ user: 'auth/user' })
  },
  methods: {
    sortTreeView() {
      this.updateTreeView(this.treeView.headerField)
    },
    clickHandler(value) {
      if (value.length) {
        const map = this.treeViewItemMap.find(map => map.key === value[0])
        if (map) {
          const checklist = this.checklists.find(
            checklist => checklist._id === map.id
          )
          this.lastItemOpened = checklist
          this.carousel.position = 1
          this.openChecklist(checklist)
        }
      } else {
        const checklist = this.checklists.find(
          checklist => checklist._id === this.lastItemOpened._id
        )
        this.carousel.position = 1
        this.openChecklist(checklist)
      }
    },
    openChecklist(checklist) {
      if (
        this.selectedChecklist.name &&
        !isEqual(this.selectedChecklist, this.originalChecklist)
      ) {
        this.dialogPromise(this.openChecklist, 'Open Checklist', checklist)
          .then(() => {
            this.editChecklist(this.constructSelected(checklist))
          })
          .catch(() => {})
      } else {
        this.editChecklist(this.constructSelected(checklist))
      }
    },
    constructSelected(checklist) {
      let selectedChecklist
      if (checklist.masterChecklist) {
        let today = new Date(Date.now())
        let nameDateTime =
          today.getFullYear() +
          '-' +
          (today.getMonth() + 1) +
          '-' +
          today.getDate() +
          ' ' +
          today.getHours() +
          ':' +
          today.getMinutes() +
          ':' +
          today.getSeconds()
        selectedChecklist = cloneDeep({
          ...checklist,
          masterChecklist: false,
          tags: [...checklist.tags, 'Log'],
          sourceMasterId: checklist._id,
          name: nameDateTime + ' / ' + checklist.name
        })
        delete selectedChecklist._id
      } else {
        selectedChecklist = cloneDeep(checklist)
      }
      return selectedChecklist
    },
    moveCarousel(position) {
      this.carousel.position = position
    },
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    ...mapActions({
      updatedUser: 'auth/updateUser',
      updateTreeView: 'checklist/updateTreeViewDisplay',
      editChecklist: 'checklist/edit'
    })
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  mounted() {
    this.treeView.headerField = this.selectedHeaderField
    if (!this.checklists.length) this.carousel.position = 1
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss">
.v-sheet > .spacer {
  height: 0.75rem;
}
.v-sheet > .v-select {
  margin-top: 2px;
  padding-left: 3px;
}
.v-treeview-node__root {
  cursor: pointer;
  &:hover {
    background-color: #0d47a1;
  }
}
</style>
