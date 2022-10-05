import mongoose from 'mongoose'
import config from './index.js'

const db = mongoose.connection

db.on('connecting', () => {
  console.info('Starting connection to database 🟡')
})

db.on('connected', () => {
  console.log('Connected to the database 🟢')
})

db.on('disconnect', () => {
  console.error('Offline database 🔴')
})

const init = () => {
  mongoose.connect(config.database.uri)
}

export default init