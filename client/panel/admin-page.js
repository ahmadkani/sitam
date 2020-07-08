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
import {getAll, getAllContacts} from './api-admin.js'
import auth from './../auth/auth-helper'
import ViewIcon from '@material-ui/icons/Visibility'
import {remove} from './../user/api-user.js'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    margin: 0,
    width: '100%',
    postition: 'relative'
  },
  accordion: {
    padding: theme.spacing(5),
    margin: 0,
    width: '200%'
  },
  accordion2: {
    padding: theme.spacing(5),
    margin: 0,
    width: '150%'
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
  row: {
    width: '100%'
    },    
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}))

export default function adminPage() {




    const classes = useStyles()
    const [values, setValues] = useState({
      users: []
    })

    const [Cvalues, setCValues] = useState({
      contacts: []
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


  
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    getAllContacts(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        setCValues({...Cvalues, contacts:data})
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




      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" 
        >
        <Typography className={classes.heading}>مدیریت نظرات</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
          <div>
          <Paper className={classes.accordion2} elevation={4}>
          <List>

          
          <TableContainer className={classes.row} component={Paper}>
          <Table aria-label="contacts table">
          <TableHead>
          <TableRow className={classes.head}>
              <TableCell className={classes.head} align="right">شماره/حذف</TableCell>
              <TableCell className={classes.head} align="right">نام</TableCell>
              <TableCell className={classes.head} align="right">ایمیل</TableCell>
              <TableCell className={classes.head} align="right">موضوع</TableCell>
              <TableCell className={classes.head} align="right">توضیح</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {Cvalues.contacts.map((item, i) => {
            return(
              <TableRow key={i} className={classes.root}>
                <Button href="#text-buttons" color="primary"  className={classes.follow} align="right" component="th" scope="row">
                {i}
                </Button>
                <TableCell className={classes.follow} align="right">{item.name}</TableCell>
                <TableCell className={classes.follow} align="right">{item.email}</TableCell>
                <TableCell className={classes.follow} align="right">{item.subject}</TableCell>
                <Box component="div" my={2} overflow="auto" className={classes.follow} align="right" style={{ width: 200, whiteSpace: 'nowrap' }}>
                {item.explanation}
                </Box>
              </TableRow>
          )})}
            </TableBody>
          </Table>
        </TableContainer>




          </List>
        </Paper>
        </div>
        </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header" 
      >
      <Typography className={classes.heading}>مدیریت نظرات</Typography>
      </AccordionSummary>
      <AccordionDetails >
        <Typography>
        <div>
        <Paper className={classes.accordion2} elevation={4}>
        <List>

        




        </List>
      </Paper>
      </div>
      </Typography>
      </AccordionDetails>
    </Accordion>




      </div>)

}