import express from 'express'
import authCtrl from '../controllers/admin.controller'

const router = express.Router()

router.route('/auth/adminsignin')
  .post(authCtrl.adminsignin)
router.route('/auth/adminsignout')
  .get(authCtrl.adminsignout)

export default router
