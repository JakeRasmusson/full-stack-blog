require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const sequelize = require('./config/connection')
const db = require('./models')

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)

sequelize.sync().then((req) => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    })
})