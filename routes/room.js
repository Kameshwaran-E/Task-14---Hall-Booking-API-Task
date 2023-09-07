const router = require("express").Router()
const { Room } = require('../model')

router.get('/', (req, res) => {
    res.send("room")
})

router.post('/add', async (req, res) => {
    const rooms = new Room(req.body)
    const data = await rooms.save()
    res.json(data)

})


router.get('/all', async (req, res) => {
    const rooms = await  Room.find().populate("room_id")
    res.json(rooms)
})


module.exports = router