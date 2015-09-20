'use strict'

import Dispatcher from '../dispatchers/AppDispatchers'
import MovieConstants from '../constants/MovieConstants'

const MovieActions {

  query: function(){
    fecth("http://localhost:3000/api/movies")
    .then((response)=>{
      return response.json()
    })
    .then((movies)=>{
      console.log(movies)

      AppDispatcher.dispatch({
        actionType: MovieConstants.MOVIE_ALL,
        movies: movies ? JSON.parse(movies).statuses : []
      })

    })
  }

}

export default MovieActions
