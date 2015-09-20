'use strict'

import AppDispatcher from '../dispatchers/AppDispatchers'
import MovieConstants from '../constants/MovieConstants'
import $ from 'jquery'

const MovieActions = {

  query: function(){
    fetch("http://localhost:3000/api/movies")
      .then((response)=>{
        return response.json()
      })
      .then((movies)=>{
        AppDispatcher.dispatch({
          actionType: MovieConstants.MOVIE_ALL,
          movies: movies
        })
      })
  },

  create: function(title, summary, picture){
    $.post("/api/movies", {title:title, summary:summary, picture:picture}, (data)=>{
      console.log("data => ",data)
    })
  }

}

export default MovieActions
