'use strict'

import React from 'react'
import MovieActions from '../../actions/MovieActions'


class CreateMovie extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <form onSubmit={ this._onSubmit.bind(this) }>
          <p>
            <input type="text" placeholder="Ingresa EL titulo de la peli" ref="title" />
          </p>
          <p>
            <input type="text" placeholder="Ingresa la url de la peli" ref="picture" />
          </p>
          <p>
            <textarea placeholder="Ingresa una resumen de la peli" ref="summary"></textarea>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }

  _onSubmit(e){
    e.preventDefault()
    let title = this.refs.title.getDOMNode().value
    let summary = this.refs.summary.getDOMNode().value
    let picture = this.refs.picture.getDOMNode().value


    MovieActions.create(title, summary, picture)

    this.refs.title.getDOMNode().value = ""
    this.refs.summary.getDOMNode().value = ""
    this.refs.picture.getDOMNode().value = ""

  }
}

export default CreateMovie
