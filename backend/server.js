const express = require('express')
const app = express()
const mongoose = require('mongoose')
const route = require('./routes/journal')
require('dotenv').config()


app.use(express.json())
app.use((req,res,next)=>{
console.log(req.method,req.path)
next()
})

// handling routes
app.use('/api/journals',route)


// connect to db

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log(`listening on port: ${process.env.PORT}`)
  })
}).catch((err)=>{
  console.log(err.message)
})


