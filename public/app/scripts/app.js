'use strict'

import React from 'react'
import Router, { Route } from 'react-router'
import RouterContainer from './service/RouterContainer'

import About from './components/about/About'
import Movies from './components/movie/Movies'
import CreateMovie from './components/movie-form/'

const routes = (
  <Route>
    <Route name="home" path="/" handler={ Movies } />
    <Route name="about" path="/about" handler={ About } />
    <Route name="new" path="/new/movie" handler={ CreateMovie } />
  </Route>
)

const router = Router.create({ routes })
RouterContainer.set(router)

router.run((Handler)=>{
  React.render(<Handler />, document.getElementById('movie'))
})
