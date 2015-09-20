'use strict'

import React from 'react'
import Router, { Route } from 'react-router'
import RouterContainer from './service/RouterContainer'

import About from './components/about/About'
import Movie from './components/movie/Movie'

const routes = (
  <Route>
    <Route name="home" path="/" handler={ Movie } />
    <Route name="about" path="/about" handler={ About } />
  </Route>
)

const router = Router.create({ routes })
RouterContainer.set(router)

router.run((Handler)=>{
  React.render(<Handler />, document.getElementById('movie'))
})
