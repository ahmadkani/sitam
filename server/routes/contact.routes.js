import express from 'express'
import ctCtrl from '../controllers/contact.controller'

const router = express.Router()

router.route('/api/contact')
  .post(ctCtrl.create)


export default router
