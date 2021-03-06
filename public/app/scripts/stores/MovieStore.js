'use strict'

import BaseStore from './BaseStore'
import MovieConstants from '../constants/MovieConstants'

class MovieStore extends BaseStore {
  constructor() {
    super()
    this.subscribe(() => this._registerToActions.bind(this))
    this._movies = null
  }

  _registerToActions(action){
    switch (action.actionType) {
      case "MOVIE_ALL":
        this._movies = action.movies
        this.emitChange()
        break
      default:
        break
    }
  }

  getMovie(){
    return {
      movies: this._movies
    }
  }

}

export default new MovieStore()
