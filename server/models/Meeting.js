const mongoose = require('mongoose');

const { Schema } = mongoose;

const meetingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    date: {
        type: Date,
        default: Date.now,
    },
    with: {
        type: Schema.Types.ObjectId,
        ref: 'supporter'
    },
    location: {
        type: String
    },
    notes: {
        type: String
    }
})

const Meeting = mongoose.model('meeting', meetingSchema);

module.exports = Meeting;