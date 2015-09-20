'use strict'

import React from 'react'


class Movie extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <li>
        <h3>{ this.props.movie.title }</h3>
        <figure>
          <img src={ this.props.movie.picture } />
        </figure>
      </li>
    )
  }
}

export default Movie
