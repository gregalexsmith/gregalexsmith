import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './views/components/App'
import HomePage from './views/components/homepage/HomePage'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
  </Route>
)
