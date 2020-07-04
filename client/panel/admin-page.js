import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction' 
import ListItemText from '@material-ui/core/ListItemText' 
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom'
import {getAll} from './api-admin.js'
import auth from './../auth/auth-helper'
import ViewIcon from '@material-ui/icons/Visibility'
import {remove} from './../user/api-user.js'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    margin: 0,
    width: '100%'
  },
  accordion: {
    padding: theme.spacing(5),
    margin: 0,
    width: '200%'
  },
  title: {
    margin: `${theme.spacing(3)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
    fontSize: '1em'
  },
  avatar: {
    marginright: theme.spacing(1)
  },
  follow: {
    right: theme.spacing(2)
  },
  snack: {
    color: theme.palette.protectedTitle
  },
  viewButton: {
    verticalAlign: 'middle'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default function Blog() {




    const classes = useStyles()
    const [values, setValues] = useState({
      users: []
    })

    const jwt = auth.isAuthenticated()
      
      

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    getAll(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        setValues({...values, users:data})
      }
    })

    return function cleanup(){
      abortController.abort()
    }

  }, [])

  const deleteAccount = (user) => { 
    if (jwt['user']['role'] == '1') 
      remove({
        userId: user
      }, {t: jwt.token}).then((data) => {
        if (data && data.error) {
          console.log(data.error)
        } else {
          auth.clearJWT(() => console.log('deleted'))
          setRedirect(true)
        }
      })
    else 
      alert('مشکلی هست .')
  }


    const clickDelete = (user, index) => {
      console.log('user_id' , user._id)
        if(confirm("آیا از حذف کاربر مطمئن هستید ؟")){deleteAccount(user._id)}
        else({})
    }


      return (<div className={classes.root}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography className={classes.heading}>مدیریت کاربران</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div>
          <Paper className={classes.accordion} elevation={4}>
          <List>
            {values.users.map((item, i) => {
                return <span key={i}>
                  <ListItem>
  
                    <ListItemText primary={item.name}/>
                    <ListItemSecondaryAction className={classes.follow}>
                      <Link to={"/user/" + item._id}>
                        <IconButton variant="contained" color="secondary" className={classes.viewButton}>
                          <ViewIcon/>
                        </IconButton>
                      </Link>
                      <Button aria-label="Delete" variant="contained" color="red" onClick={()=> {clickDelete(item, i)}}>
                        حذف کاربر
                      </Button>
                    </ListItemSecondaryAction>
                    <ListItemAvatar  style={{margin:'5px'}} className={classes.avatar}>
                      <Avatar src={'/api/users/photo/'+item._id}/>
                    </ListItemAvatar>
                  </ListItem>
                </span>
              })
            }
          </List>
        </Paper>
        </div>
        </Typography>
        </AccordionDetails>
      </Accordion>




      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography className={classes.heading}>مدیریت نظرات</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div>
          <Paper className={classes.accordion} elevation={4}>
          <List>
            {values.users.map((item, i) => {
                return <span key={i}>
                  <ListItem>
  
                    <ListItemText primary={item.name}/>
                    <ListItemSecondaryAction className={classes.follow}>
                      <Link to={"/user/" + item._id}>
                        <IconButton variant="contained" color="secondary" className={classes.viewButton}>
                          <ViewIcon/>
                        </IconButton>
                      </Link>
                      <Button aria-label="Delete" variant="contained" color="red" onClick={()=> {clickDelete(item, i)}}>
                        حذف کاربر
                      </Button>
                    </ListItemSecondaryAction>
                    <ListItemAvatar  style={{margin:'5px'}} className={classes.avatar}>
                      <Avatar src={'/api/users/photo/'+item._id}/>
                    </ListItemAvatar>
                  </ListItem>
                </span>
              })
            }
          </List>
        </Paper>
        </div>
        </Typography>
        </AccordionDetails>
      </Accordion>



      </div>)

}