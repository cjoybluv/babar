<template>
  <div>
    <v-row>
      <v-col>
        <v-btn @click="addPanel" :disabled="expansionPanels.length > 4"
          >ADD_PANEL</v-btn
        >
      </v-col>
      <v-col>
        <v-btn @click="removePanel" :disabled="expansionPanels.length === 1"
          >REMOVE_PANEL</v-btn
        >
      </v-col>
    </v-row>
    <v-row no-gutters class="d-none d-sm-flex">
      <v-col cols="12" sm="5" md="4" v-show="expansionPanels.length < 2">
        <v-sheet
          tile
          :min-height="window.height - window.heightReduction"
          class="primary"
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
      <v-col cols="12" sm="7" md="4" v-show="expansionPanels.length < 3">
        <v-sheet
          tile
          class="primary lighten-1"
          :min-height="window.height - window.heightReduction"
        >
          <h1 class="white--text">panel[1]</h1>
        </v-sheet>
      </v-col>
      <v-col
        cols="12"
        md="4"
        v-for="(panel, index) in expansionPanels"
        :key="index"
        v-show="expansionPanels.length - index < 4"
      >
        <v-sheet
          tile
          :min-height="window.height - window.heightReduction"
          class="primary"
          :class="panelClasses[index]"
        >
          <h1 class="white--text">expansionPanel[{{ index }}]</h1>
          <h2 class="white--text">{{ panel.label }}</h2>
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
        <v-carousel-item>
          <v-sheet
            tile
            :min-height="window.height - window.heightReduction"
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
            class="primary lighten-1 pa-2"
            :min-height="window.height - window.heightReduction"
          >
            <h1>ITEM FORM HERE</h1>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item v-for="(panel, index) in expansionPanels" :key="index">
          <v-sheet
            tile
            class="primary pa-2"
            :class="panelClasses[index]"
            :min-height="window.height - window.heightReduction"
          >
            <h1>EXPANSION PANEL [ {{ index }} ]</h1>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'checklists',
  components: {},

  data() {
    return {
      expansionPanels: [
        {
          label: 'test',
          activeComponent: null,
          payload: null
        }
      ],
      panelClasses: [
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
  methods: {
    addPanel() {
      this.expansionPanels.push({
        label: 'expPanel: ' + this.expansionPanels.length,
        activeComponent: null,
        payload: null
      })
      this.carousel.position++
    },
    removePanel() {
      this.expansionPanels.splice(this.expansionPanels.length - 1, 1)
      this.carousel.position--
    },
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    }
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
