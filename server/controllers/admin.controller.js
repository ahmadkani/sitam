import jwt from 'jsonwebtoken'
import User from '../models/user.model'
import config from './../../config/config'
import expressJwt from 'express-jwt'

const adminsignin = async (req, res) => {
    try {
      let user = {name : '1' , password : '1'}
      if (user.password !== (req.body.password ) || user.name !== (req.body.name)) {
        return res.status('401').send({
          error: "ادمین کی بودی تو؟"
        })
      }

  
      const token = jwt.sign({
        _id: '32112323413253'
      }, config.jwtSecret)
  
      res.cookie("t", token, {
        expire: new Date() + 9999
      })
  
      return res.json({
        token,
        user: {_id: '32112323413253', name: 'admin', email: '', role: '1'}
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
  

  
  
  export default {
    adminsignin,
    adminsignout,
    getAll
  }
  