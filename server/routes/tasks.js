import express from 'express'
import taskCtrl from '../controllers/tasks.js'

const router = express.Router()

router.route('/')
  .get(taskCtrl.list)
  .post(taskCtrl.create)

router.route('/:taskId')
  .get(taskCtrl.get)
  .put(taskCtrl.update)
  .delete(taskCtrl.remove)

router.param('taskId', taskCtrl.load)

export default router
