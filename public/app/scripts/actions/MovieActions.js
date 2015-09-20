'use strict'

import AppDispatcher from '../dispatchers/AppDispatchers'
import MovieConstants from '../constants/MovieConstants'

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
  }

}

export default MovieActions
