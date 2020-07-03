import mongoose from 'mongoose'
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    },
  email: {
    type: String,
    trim: true,
    match: [/.+\@.+\..+/, 'ایمیل وارد شده صحیح نیست'],
    required: 'ایمیل الزامی است'
    },
  subject: {
    type: String,
    trim: true,
    },
  explanation: {
    type: String,
    },
  created: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('contact', ContactSchema)
