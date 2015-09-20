'use strict'

import http from 'http'
import mongoose from 'mongoose'
import App from './lib'

const server = http.createServer()
const port = process.env.PORT || 3000
const database = "mongodb://localhost/movies"
const movies = new App()

server.on("request", movies.app)
server.on("listening", onListening)

mongoose.connect(database, onDBConnect)

if(!module.parent)
  server.listen(port)

function onDBConnect(err){
  if(err) console.log(`ERROR: on connection to database, ${ err }`)
  else
    console.log(`Connection established to database`)
}

function onListening(){
  console.log(`Server listening on http://localhost:${ port }`)
}
