import express from 'express'
import userCtrl from '../controllers/users.js'

const router = express.Router()

router.route('/')
  .get(userCtrl.list)
  .post(userCtrl.create)

router.route('/:userId')
  .get(userCtrl.get)
  .put(userCtrl.update)
  .delete(userCtrl.remove)

router.param('userId', userCtrl.load)

export default router
