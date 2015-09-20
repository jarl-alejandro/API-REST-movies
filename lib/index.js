'use strict'

import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './router'


class App{

  constructor(){
    this.app = express()

    this.app.use(cors())
    this.app.use(bodyParser.json())
    this.app.use(router)
    this.app.use(express.static(path.join(__dirname, "..", "public", "dist")))
  }

}
export default App
