import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import adminauth from './admin-auth-helper.js'

const PrivateRoute2 = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    adminauth.isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/admin',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute2
