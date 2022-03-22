//setup server 
const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
var noteRoute = require('./route/note-route')
const app = express()

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use("/api/v1", noteRoute)

app.listen(3000,()=>{
    console.log("server runinig....")
})