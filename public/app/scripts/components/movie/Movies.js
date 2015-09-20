'use strict'

import React from 'react'
import { Route, RouteHandler, Link } from 'react-router'
import MovieStore from '../../stores/MovieStore'
import MovieActions from '../../actions/MovieActions'
import Movie from './Movie'

class Movies extends React.Component{

  constructor(props){
    super(props)
    this.state = { movies:[] }
  }

  componentDidMount(){
    MovieActions.query()
    MovieStore.addChangeListener(this._onChange.bind(this))
  }

  componentWillUnmount(){
    MovieStore.removeChangeListener(this._onChange.bind(this))
  }

  render(){
    return(
      <div>
        <h1>Welcome to Movie App</h1>
        <Link to="new">Nueva Peli</Link>
        <button onClick={ this._onClick.bind(this) }>movie app</button>
        <ul>
          {
            this.state.movies.map((movie, index)=>{
              return(
                <Movie key={ index } movie={ movie } />
              )
            })
          }
        </ul>
      </div>
    )
  }

  _onClick(e){
    e.preventDefault()
    MovieActions.query()
  }

  _onChange(){
    this.setState(MovieStore.getMovie())
  }
}

export default Movies
