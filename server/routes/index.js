import express from 'express'
import userRoutes from './users.js'
import taskRoutes from './tasks.js'

const router = express.Router()

router.get('/api-status', (req, res) => {
  res.json({
    status: "ok"
  })
})

router.use('/users', userRoutes)
router.use('/tasks', taskRoutes)

export default router
