import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import {create} from './Contact-helper.js'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
}))

export default function Contact(props) {
  const classes = useStyles()
  const [values, setValues] = useState({
      name: '',
      email: '',
      subject: '',
      explanation: '',
      error: '',
      open: false
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }


  const clickSend = () => {
    const user = {
      name : values.name || undefined,
      email: values.email || undefined,
      subject: values.subject || undefined,
      explanation: values.explanation || undefined
    }

    create(user).then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error})
        } else {
          setValues({ ...values, error: '', open: true})
        }
      })
  }



  return (
      <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            تماس با ما
          </Typography>
          <TextField dir="rtl" id="name" type="text" label="نام" className={classes.textField} value={values.name}  onChange={handleChange('name')} margin="normal"/><br/>
          <TextField dir="rtl" id="email" type="email" label="ایمیل" className={classes.textField} value={values.email} onChange={handleChange('email')} margin="normal"/><br/>
          <TextField dir="rtl" id="subject" type="text" label="موضوع" className={classes.textField} value={values.subject} onChange={handleChange('subject')} margin="normal"/><br/><br/>
          <TextField dir="rtl" id="explanation" type="text" label="توضیح" multiline className={classes.textField} value={values.explanation} rows={10} onChange={handleChange('explanation')} variant="outlined" />
          <br/> {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}
            </Typography>)
          }
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" onClick={clickSend} className={classes.submit}>ارسال</Button>
        </CardActions>
      </Card>
      <Dialog open={values.open} disableBackdropClick={true}>
        <DialogContent>
          <DialogContentText>
            نظر شما با موفقیت ثبت شد
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/">
            <Button color="primary" autoFocus="autoFocus" variant="contained">
              بازگشت
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
      </div>
    )
}
