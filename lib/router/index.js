'use strict'

import express from 'express'
import MovieController from '../movie'

const router = express.Router()
const movieCtrl = new MovieController()

router.get("/", (req, res) => res.send("Welcome movies to API REST"))

router.get("/api/movies", movieCtrl.getAll)
router.post("/api/movies", movieCtrl.save)
router.get("/api/movies/:id", movieCtrl.get)
router.put("/api/movies/:id", movieCtrl.update)
router.delete("/api/movies/:id", movieCtrl.delete)

export default router
