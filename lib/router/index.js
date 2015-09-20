'use strict'

import fs from 'fs'
import path from 'path'
import express from 'express'
import MovieController from '../movie'

const router = express.Router()
const movieCtrl = new MovieController()

router.get("/", (req, res) => {
  const template = path.join(__dirname, "..", "..", "views", "index.html")
  let rs = fs.createReadStream(template)
  rs.pipe(res)
})

router.get("/api/movies", movieCtrl.getAll)
router.post("/api/movies", movieCtrl.save)
router.get("/api/movies/:id", movieCtrl.get)
router.put("/api/movies/:id", movieCtrl.update)
router.delete("/api/movies/:id", movieCtrl.delete)

export default router
