const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    room_name: String,
    room_id: [{
        type: mongoose.Types.ObjectId,
        ref: "customers",
    }],
    number_of_seats_avalible: Number,
    amenities: [],
    price_for_1_hour: String,

})

const Room = mongoose.model("rooms", roomSchema)

module.exports = Room