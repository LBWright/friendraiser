const mongoose = require('mongoose')

const { Schema } = mongoose

const supporterSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  amount: {
    type: Number
  },
  asking: {
    type: Number
  },
  current: {
    type: Boolean,
    required: true,
    default: false
  },
  likelihood: {
    type: String
  },
  notes: {
    type: String
  },
  meeting: {
    type: Schema.Types.ObjectId,
    ref: 'meeting'
  },
  actions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'action'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Supporter = mongoose.model('supporter', supporterSchema)

module.exports = Supporter
