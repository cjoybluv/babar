import isEqual from 'lodash/isEqual'

export const continueDialogMixin = {
  data() {
    return {
      continueDialog: {
        open: false,
        continue: false,
        source: null,
        sourceDescription: '',
        payload: null
      }
    }
  },
  methods: {
    dialogContinue() {
      this.continueDialog.continue = true
      this.continueDialog.open = false
      this.continueDialog.source(this.continueDialog.payload)
    },
    dialogReturn() {
      this.continueDialog.continue = false
      this.continueDialog.source = null
      this.continueDialog.payload = null
      this.continueDialog.open = false
    },
    dialogPromise(source, sourceDescription, payload) {
      return new Promise((resolve, reject) => {
        if (
          !this.continueDialog.continue &&
          !isEqual(this.checklist, this.originalChecklist)
        ) {
          this.continueDialog.source = source
          this.continueDialog.sourceDescription = sourceDescription
          this.continueDialog.payload = payload
          this.continueDialog.open = true
          reject()
        } else {
          this.openOptions = false
          this.continueDialog.continue = false
          this.continueDialog.source = null
          this.continueDialog.payload = null
          resolve()
        }
      })
    }
  }
}
