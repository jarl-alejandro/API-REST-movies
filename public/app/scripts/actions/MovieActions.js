'use strict'

import AppDispatcher from '../dispatchers/AppDispatchers'
import MovieConstants from '../constants/MovieConstants'
import RouterContainer from '../service/RouterContainer'
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
    let movie = {
      title:title,
      summary:summary,
      picture:picture
    }
    $.post("/api/movies", movie, (data)=>{
        let nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/'
        RouterContainer.get().transitionTo("/")
    })
  }

}

export default MovieActions
