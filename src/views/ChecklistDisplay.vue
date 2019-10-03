<template>
  <div id="checklistDisplay" class="primary lighten-2">
    <v-row no-gutters class="d-none d-sm-flex mr-2">
      <v-col
        cols="12"
        md="4"
        v-for="(panel, index) in panels"
        :key="index"
        v-show="panels.length - index < 4"
      >
        <v-sheet
          tile
          :min-height="window.height - window.heightReduction"
          class="primary"
          :class="panelClasses[index]"
        >
          <ItemSelector
            :payload="panels[index].payload"
            v-if="showMe('ItemSelector', index)"
          />

          <Checklist
            :payload="panels[index].payload"
            v-if="showMe('Checklist', index)"
            @open-checklist="openChecklist"
            @clear-form="clearForm(index)"
            @edit-master="editMaster"
            @open-connection="openConnection"
          />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters class="d-flex d-sm-none">
      <v-carousel
        v-model="carousel.position"
        :show-arrows="false"
        dark
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(panel, index) in panels"
          :key="index"
          v-show="panels.length - index < 4"
        >
          <v-sheet
            tile
            class="primary pa-2"
            :class="panelClasses[index]"
            :min-height="window.height - window.heightReduction"
          >
            <ItemSelector
              :payload="panels[index].payload"
              v-if="showMe('ItemSelector', index)"
            />

            <Checklist
              :payload="panels[index].payload"
              v-if="showMe('Checklist', index)"
              @open-checklist="openChecklist"
              @clear-form="clearForm(index)"
              @edit-master="editMaster"
              @open-connection="openConnection"
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
import Vue from 'vue'
import cloneDeep from 'lodash/cloneDeep'
import isEqual from 'lodash/isEqual'
import has from 'lodash/has'
import { mapActions, mapGetters } from 'vuex'

import ItemSelector from '@/components/ItemSelector'
import Checklist from '@/components/Checklist'
import { continueDialogMixin } from '@/mixins/continueDialog'

export default {
  name: 'ChecklistDisplay',
  components: {
    ItemSelector,
    Checklist
  },
  mixins: [continueDialogMixin],
  data() {
    return {
      checklist: {},
      originalChecklist: {},
      panels: [
        {
          label: 'Item Selector',
          activeComponent: 'ItemSelector',
          payload: { items: this.checklists, clickHandler: this.clickHandler }
        },
        {
          label: 'Checklist Form',
          activeComponent: 'Checklist',
          payload: { checklist: {}, originalChecklist: {}, index: 1 }
        }
      ],
      panelClasses: [
        '',
        'lighten-1',
        'lighten-2',
        'darken-1',
        'darken-2',
        'darken-3',
        'darken-4'
      ],
      carousel: {
        position: 0
      },
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
    inEdit() {
      return this.$store.state.checklist.inEdit
    },
    selectedHeaderField() {
      return this.$store.state.treeView.selectedHeaderField
    },
    treeViewItemMap() {
      return this.$store.state.treeView.itemMap
    },
    ...mapGetters({
      getChecklistById: 'checklist/getChecklistById'
    })
  },
  methods: {
    showMe(component, index) {
      return this.panels[index].activeComponent === component ? true : false
    },
    clickHandler(value) {
      if (value.length) {
        const map = this.treeViewItemMap.find(map => map.key === value[0])
        if (map) {
          const checklist = this.checklists.find(
            checklist => checklist._id === map.id
          )
          this.lastItemOpened = checklist
          // this.carousel.position = 1
          this.openChecklist({ checklist, index: 1 })
        }
      } else {
        const checklist = this.checklists.find(
          checklist => checklist._id === this.lastItemOpened._id
        )
        // this.carousel.position = 1
        this.openChecklist({ checklist, index: 1 })
      }
    },
    openChecklist(payload) {
      const checklist = payload.checklist
      const targetIndex = payload.index
      // CHECK FOR UNSAVED CHANGES ON TARGET
      if (
        this.inEdit.length > targetIndex &&
        has(this.inEdit[targetIndex], 'selectedChecklist.name') &&
        !isEqual(
          this.inEdit[targetIndex].selectedChecklist,
          this.inEdit[targetIndex].originalChecklist
        )
      ) {
        this.checklist = this.inEdit[targetIndex].selectedChecklist
        this.originalChecklist = this.inEdit[targetIndex].originalChecklist
        this.dialogPromise(
          this.openChecklist,
          'Open different Checklist',
          payload
        )
          .then(() => {
            this.editChecklist(this.constructSelected(checklist), targetIndex)
          })
          .catch(() => {
            this.carousel.position = targetIndex
          })
      } else {
        this.editChecklist(this.constructSelected(checklist), targetIndex)
      }
    },
    editChecklist(checklist, index) {
      if (this.panels.length > index) {
        Vue.set(this.panels, index, {
          label: 'Checklist Form',
          activeComponent: 'Checklist',
          payload: { checklist, originalChecklist: cloneDeep(checklist), index }
        })
      } else {
        this.panels.push({
          label: 'Checklist Form',
          activeComponent: 'Checklist',
          payload: { checklist, originalChecklist: cloneDeep(checklist), index }
        })
        this.carousel.position++
      }
      this.setSelected({ checklist, index })
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
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    checklistSaved(payload) {
      //update this.panels so original = selected
      Vue.set(this.panels, payload.index, {
        checklist: payload.checklist,
        originalChecklist: cloneDeep(payload.checklist)
      })
    },
    clearForm(index) {
      // panels to right of index?
      if (this.panels.length > index + 1) {
        let unsavedChanges = false
        for (
          let targetIndex = this.panels.length - 1;
          targetIndex >= index;
          targetIndex--
        ) {
          // console.log('clearForm:for', targetIndex, JSON.stringify(this.inEdit))
          if (
            this.inEdit.length > targetIndex &&
            has(this.inEdit[targetIndex], 'selectedChecklist.name') &&
            !isEqual(
              this.inEdit[targetIndex].selectedChecklist,
              this.inEdit[targetIndex].originalChecklist
            )
          ) {
            unsavedChanges = true
            this.checklist = this.inEdit[targetIndex].selectedChecklist
            this.originalChecklist = this.inEdit[targetIndex].originalChecklist
          }
        }
        if (unsavedChanges) {
          this.dialogPromise(this.clearForm, 'Clear Embedded Checklist', index)
            .then(() => {
              for (let idx = this.panels.length - 1; idx >= index; idx--) {
                this.panels.splice(idx, 1)
                this.clearSelected(idx)
                if (idx === 1) {
                  Vue.set(this.panels, idx, {
                    label: 'Checklist Form',
                    activeComponent: 'Checklist',
                    payload: {
                      checklist: {},
                      originalChecklist: {},
                      index: idx
                    }
                  })
                }
              }
            })
            .catch(() => {
              this.carousel.position = index
            })
        } else {
          for (let idx = this.panels.length - 1; idx >= index; idx--) {
            this.panels.splice(idx, 1)
            this.clearSelected(idx)

            if (idx === 1) {
              Vue.set(this.panels, idx, {
                label: 'Checklist Form',
                activeComponent: 'Checklist',
                payload: {
                  checklist: {},
                  originalChecklist: {},
                  index: idx
                }
              })
            }
          }
        }
      } else {
        this.panels.splice(index, 1)
        this.clearSelected(index)
        if (index === 1) {
          Vue.set(this.panels, index, {
            label: 'Checklist Form',
            activeComponent: 'Checklist',
            payload: {
              checklist: {},
              originalChecklist: {},
              index: index
            }
          })
        } else {
          this.carousel.position--
        }
      }
    },
    editMaster(payload) {
      Vue.set(this.panels, payload.index, {
        label: 'Checklist Form',
        activeComponent: 'Checklist',
        payload: {
          checklist: payload.checklist,
          originalChecklist: cloneDeep(payload.checklist),
          index: payload.index
        }
      })
    },
    openConnection(payload) {
      const checklist = cloneDeep(
        this.getChecklistById(payload.connection.resourceId)
      )
      this.setSelected({
        checklist,
        index: payload.index
      })
      Vue.set(this.panels, payload.index, {
        label: 'Checklist Form',
        activeComponent: 'Checklist',
        payload: {
          checklist,
          originalChecklist: cloneDeep(checklist),
          index: payload.index
        }
      })
      this.carousel.position++
    },
    ...mapActions({
      setSelected: 'checklist/setSelected',
      clearSelected: 'checklist/clearSelected'
    })
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss">
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