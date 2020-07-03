import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#ffa726'}
  else
    return {color: '#ffffff'}
}
const Menu = withRouter(({history}) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit" >
      سایتم
      </Typography>
      <Link to="/">
        <IconButton aria-label="Home" style={isActive(history, "/")}>
          <HomeIcon/>
        </IconButton>
      </Link>
      {
        !auth.isAuthenticated() && (<span>
          <Link to="/signup">
            <Button style={isActive(history, "/signup")}>ثبت نام
            </Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive(history, "/signin")}>ورود
            </Button>
          </Link>

          <Link to="/Blog">
          <Button style={isActive(history, "/Blog")}>بلاگ
          </Button>
          </Link>

          <Link to="/AboutUs">
          <Button style={isActive(history, "/AboutUs")}>درباره ما
          </Button>
          </Link>

          
          <Link to="/Contact">
          <Button style={isActive(history, "/Contact")}>تماس با ما
          </Button>
          </Link>

                    
          <Link to="/admin">
          <Button style={isActive(history, "/admin")}>تا
          </Button>
          </Link>

          
        </span>)
      }
      {
        auth.isAuthenticated() && (<span>
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>صفحه من</Button>
          </Link>

          <Link to="/Blog">
          <Button style={isActive(history, "/Blog")}>بلاگ
          </Button>
          </Link>

          <Link to="/AboutUs">
          <Button style={isActive(history, "/AboutUs")}>درباره ما
          </Button>
          </Link>

          <Link to="/Contact">
          <Button style={isActive(history, "/Contact")}>تماس با ما
          </Button>
          </Link>

          <IconButton aria-label="Exit" color="inherit" onClick={() => {
              auth.clearJWT(() => history.push('/'))
            }}><PowerSettingsNewIcon/></IconButton>

        </span>)
      }



    </Toolbar>

  </AppBar>

))

export default Menu
