import mongoose from 'mongoose'
import config from './env'

const db = {
  config: () => {
    // Connect
    mongoose.connect(config.db)

    // On connection error
    mongoose.connection.on('error', () => {
      throw new Error(`Unable to connect to database: ${config.db}`)
    })

    // On connection successful
    mongoose.connection.on('connected', () => {
      console.log(`Connected to database: ${config.db}`);
    })

    // If development environment, set mongo to debug mode
    if (config.env == 'development') mongoose.set('debug', true)
  }
}

export default db
