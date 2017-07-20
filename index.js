import app from './config/express.js'
import config from './config/env'
import db from './config/db.js'

// Configure database
db.config()

// Start webserver
app.listen(config.port, () => {
  console.log(`API Server started and listening on port ${config.port} (${config.env})`);
})

export default app
