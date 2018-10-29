const mongoose = require('mongoose')

const { Schema } = mongoose

const taskSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
