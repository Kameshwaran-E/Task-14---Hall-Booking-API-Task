const router = require("express").Router()
const { Customer, Room } = require('../model')

router.get('/', (req, res) => {
    res.send("customer")
})

router.post('/add', async (req, res) => {
    try {
        const customer = await Customer.create(req.body)
        const roomData = await Room.findByIdAndUpdate(req.body.bookedRoom, {
            $push: { room_id: customer._id }
        })
        res.json({ customer, roomData })
    }
    catch (err) {
        res.json({ msg: err.message })
    }
})

router.get("/all", async (req, res) => {
    try {
        const customer = await  Customer.find().populate("bookedRoom")
        res.json(customer)
    }
    catch (err) {
        res.json({ msg: err.message })
    }
})



module.exports = router