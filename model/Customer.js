const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    address: {
        name: String,
    },
    bookedStatus: Boolean,
    bookedRoom: {
        type: mongoose.Types.ObjectId,
        ref: "rooms",
        unique: true
    },
    date: String,
    start_time: {
        type: String,
        unique: true

    },
    end_time: {
        type: String,
        unique: true
    }

})

const Customer = mongoose.model("customers", customerSchema)
module.exports = Customer