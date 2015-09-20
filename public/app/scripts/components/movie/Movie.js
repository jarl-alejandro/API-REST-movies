'use strict'

import React from 'react'
import MovieStore from '../../stores/MovieStore'
import MovieActions from '../../actions/MovieActions'

class Movie extends React.Component{

  constructor(props){
    super(props)
    this.state = { movies:[] }
  }

  componentDidMount(){
    MovieStore.addChangeListener(this._onChange.bind(this))
  }

  componentWillUnmount(){
    MovieStore.removeChangeListener(this._onChange.bind(this))
  }

  render(){
    return(
      <div>
        <h1>Welcome to Movie App</h1>
        <button onClick={ this._onClick.bind(this) }>movie app</button>
        <article>
          {
            this.state.movies.map((m, i)=>{
              return(
                <li key={ i }>
                  <p>{ m.title }</p>
                </li>
              )
            })
          }
        </article>
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

export default Movie
