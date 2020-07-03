import contact from '../models/contact.model'
import errorHandler from './../helpers/dbErrorHandler'

const create = async (req, res) => {
  const user = new contact(req.body)
  try {
    await user.save()
    return res.status(200).json({
      message: "پیام شما ثبت شد"
    })
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}



export default {
    create
  }
  