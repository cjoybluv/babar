const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ChecklistSchema = new Schema({
  ownerId: {
    type: Schema.Types.ObjectId,
    required: [true, 'ownerId required']
  },
  name: {
    type: String,
    required: [true, 'Checklist.name is required']
  },
  masterChecklist: Boolean,
  masterLocked: Boolean,
  sourceMasterId: Schema.Types.ObjectId,
  tags: [String],
  items: [
    {
      key: {
        type: String,
        required: [true, 'item.key is required']
      },
      subject: {
        type: String,
        required: [true, 'item.subject is required']
      },
      completed: Boolean
    }
  ]
})

const Checklist = mongoose.model('Checklist', ChecklistSchema)

module.exports = Checklist
