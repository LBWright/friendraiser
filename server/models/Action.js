const mongoose = require('mongoose');

const { Schema } = mongoose;

const actionSchema = new Schema({
    supporter: {
        type: Schema.Types.ObjectId,
        ref: 'supporter',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    completed: {
        type: String,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Action = mongoose.model('action', actionSchema);

module.exports = Action;