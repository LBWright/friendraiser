const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const cors = require('cors')

const keys = require('./config/keys')
const PORT = process.env.PORT || 5500

const app = express()
app.use(express.json())
app.use(cors()) // will need to whitelist cors based on env vars
app.use(helmet())
require('./api/public')(app)
require('./api/restricted')(app)

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to external database')
  })
  .catch(err => {
    console.log('Something went wrong connected to DB:', err)
  })

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})
