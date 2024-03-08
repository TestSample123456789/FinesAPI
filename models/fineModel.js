const mongoose = require('mongoose')

const fineSchema = mongoose.Schema({
    reason: {
        type: String,
        required: [true, "Please enter a reason for the fine"]
    },
    place: {
        type: String,
        required: [true, "Please enter the location of the fine"]
    },
    issue_time: {
        type: Date,
        required: [true, "Please enter the issue data of the fine"]
    },
    amount: {
        type: Number,
        required: [true, "Please enter the fine amount"]
    },
    payment_status: {
        type: Boolean,
        default: false
    },
    penalty_amount: {
        type: Number,
        default: 0.00
    },
    user_id: {
        type: Number,
        required: [true, "Please select a user for the fine"]
    },
    vehicle_id: {
        type: Number,
        required: [true, "Please select a user for the fine"]
    }
    // created_at: {
    //     type: Date
    // },
    // modified_at: {
    //     type: Date
    // }
},
    {
        timestamps: true
    })

const Fine = mongoose.model('Fine', fineSchema);
module.exports = Fine;