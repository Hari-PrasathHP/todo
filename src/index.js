const express = require('express')

require('./db/mongoose')

const todoRoute = require('./routes/todo')

const app = express()

app.use(express.json())

app.use(todoRoute)

const PORT = 3000

app.listen(PORT,()=>console.log(`the server running upon ${PORT}`))

