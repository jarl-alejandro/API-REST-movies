'use strict'

import Movie from './model'

class MovieController{

  getAll(req, res){
    Movie.find({})
    .then((movies)=>{
      res
        .status(200)
        .json(movies)
    })
    .catch((err)=>{
      res.send(err.message)
    })
  }

  get(req, res, next){
    let id = req.params.id

    if(!id)
      next()

    Movie.findById(id)
    .then((movie)=>{
      res
        .status(200)
        .json(movie)
    })
    .catch((err)=>{
      return err.message
    })
  }

  save(req, res){
    let movie = new Movie({
      title: req.body.title,
      summary: req.body.summary,
      picture: req.body.picture
    })

    console.log(`${req.body.title} ${req.body.summary}, ${req.body.picture}`)

    movie.save((err) => {
      if(err) return err.message
      else{
        res
          .status(200)
          .send(movie)
      }
    })
  }

  update(req, res, next){
    let id = req.params.id

    if(!id)
      next()

    Movie.findById(id)
    .then((movie)=>{
      movie.title = req.body.title
      movie.summary = req.body.summary
      movie.picture = req.body.picture

      movie.save((err)=>{
        if(err) return err.message
        else{
          res
            .status(201)
            .json(movie)
        }
      })
    })
    .catch((err)=>{
      return err.message
    })
  }

  delete(req, res, next){
    let id = req.params.id

    if(!id)
      return next()

    Movie.findById(id)
    .then((movie)=>{
      movie.remove((err)=>{
        if(err) return err.message
        else{
          res
          .status(204)
          .send("Ha sido eliminado correctamenete")
        }
      })

    }).catch((err)=>{
      return err.message
    })
  }

}

export default MovieController
