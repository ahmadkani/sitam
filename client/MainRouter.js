import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import Footer from './core/Footer'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Admin from './panel/admin-panel-signin'
import AdminPage from './panel/admin-page.js'
import PrivateRoute2 from './panel/adminPrivateRoute'
import NewMedia from './media/NewMedia'
import PlayMedia from './media/PlayMedia'
import EditMedia from './media/EditMedia'


const MainRouter = ({data}) => {



    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/admin" component={Admin}/>
        <PrivateRoute2 path="/1" component={AdminPage}/> 
        <Route path="/Blog" component={Blog}/>
        <Route path="/AboutUs" component={AboutUs}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>

        <PrivateRoute path="/media/new" component={NewMedia}/>
        <PrivateRoute path="/media/edit/:mediaId" component={EditMedia}/>
        <Route path="/media/:mediaId" render={(props) => (
          <PlayMedia {...props} data={data} />
      )} />
        
      </Switch>
      <Footer/>
    </div>)
}

export default MainRouter
