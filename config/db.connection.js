const mongoose = require('mongoose')
const { DATABASE_URI } = process.env

mongoose.connect(DATABASE_URI)

mongoose.connection
  .on("open", () => console.log('Connected to MongoDB...'))
  .on("close", () => console.log('Disconnected...'))
  .on("error", (error) => console.log('error'))