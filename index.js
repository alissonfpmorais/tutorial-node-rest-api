import app from './config/express.js'

app.listen(3000, () => {
  console.log('API Server started and listening on port 3000');
})

export default app
