import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'
import mediaCtrl from '../controllers/media.controller'
import config from './../../config/config'

const router = express.Router()

router.route('/api/media/new/' + config.admin_id)
    .post(authCtrl.requireSignin, mediaCtrl.create)

router.route('/api/media/video/:mediaId')
    .get(mediaCtrl.video)

router.route('/api/media/popular')
    .get(mediaCtrl.listPopular)

router.route('/api/media/related/:mediaId')
    .get(mediaCtrl.listRelated)

router.route('/api/media/by/' + config.admin_id)
    .get(mediaCtrl.listByUser)

router.route('/api/media/:mediaId')
    .get( mediaCtrl.incrementViews, mediaCtrl.read)
    .put(authCtrl.requireSignin, mediaCtrl.isPoster, mediaCtrl.update)
    .delete(authCtrl.requireSignin, mediaCtrl.isPoster, mediaCtrl.remove)

router.param('userId', userCtrl.userByID1)
router.param('mediaId', mediaCtrl.mediaByID)

export default router



