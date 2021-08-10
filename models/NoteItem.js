const mongoose = require('mongoose');
const NoteItemSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        isCompleted: {
            type: Boolean,
            required: true,
            default: false
        },
        createdDate: {
            type: Date,
            //default: Date.now
        },
        updatedDate: {
            type: Date,
            //default: Date.now
        }
    }
);
mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('NoteItem', NoteItemSchema)