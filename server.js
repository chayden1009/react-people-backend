require('dotenv').config()
require('./config/db.connection')

const express = require('express')
const { PORT } = process.env
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const peopleRouter = require('./routes/people')


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.get('/', (req, res) => {
  console.log('Hello World!')
})
app.use('/people', peopleRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))