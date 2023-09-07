const express = require('express')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')

const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 4000
const routerApi = require('./routes')

connectDB()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api", routerApi)


app.get('/', (req, res) => {
    res.send(`basic server setup`)
})

app.listen(
    PORT || 4000,
    () => console.log(`server is running on ${PORT}`)
)