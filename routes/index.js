const router = require("express").Router()

const roomRouter = require('./room')
const customerRouter = require('./customer')

router.use('/room', roomRouter)
router.use('/customer', customerRouter)

module.exports = router

