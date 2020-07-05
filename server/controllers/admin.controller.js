import jwt from 'jsonwebtoken'
import User from '../models/user.model'
import Contact from '../models/contact.model'
import config from './../../config/config'

const adminsignin = async (req, res) => {
    try {
      let user = {name : config.admin_name , password : config.admin_pass}
      if (user.password !== (req.body.password ) || user.name !== (req.body.name)) {
        return res.status('401').send({
          error: "ادمین کی بودی تو؟"
        })
      }

  
      const token = jwt.sign({
        _id: config.admin_id
      }, config.jwtSecret)
  
      res.cookie("t", token, {
        expire: new Date() + 9999
      })
  
      return res.json({
        token,
        user: {_id: config.admin_id , name: config.admin_name , email: '', role: '1'}
      })
    } catch (err) {
      console.log(err)
      return res.status('401').json({
        error: "ورود صورت نگرفت"
      })
  
    }
  }
  
  const adminsignout = (req, res) => {
    res.clearCookie("t")
    return res.status('200').json({
      message: "خارج شدید"
    })
  }


//get all users and send it for admin
  const getAll = async (req, res) => {

    try {
    let users = await User.find({}).select('name')
      res.json(users)
    }catch(err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }
  

  const getAllContacts = async (req, res) => {

    try {
    let contacts = await Contact.find({}, function (err, docs) {

    });
    console.log('object', contacts)
      res.json(contacts)
    }catch(err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }
  
  
  export default {
    adminsignin,
    adminsignout,
    getAll,
    getAllContacts
  }
  