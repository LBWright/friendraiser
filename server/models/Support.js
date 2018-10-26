const mongoose = require('mongoose')

const { Schema } = mongoose

const supportSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  oneTimeGoal: {
    type: Number
  },
  oneTimeCurrent: {
    type: Number
  },
  monthlyGoal: {
    type: Number
  },
  monthlyCurrent: {
    type: Number
  }
})

const Support = mongoose.model('support', supportSchema)

module.exports = Support
