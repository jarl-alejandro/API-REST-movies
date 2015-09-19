'use strict'

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const MovieSchema = new Schema({
  title: String,
  summary: String,
  picture: String
})

MovieSchema.set("toJSON", {
  transform: function(doc, ret, options){
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

const Movie = mongoose.model("Movies", MovieSchema)

export default Movie
