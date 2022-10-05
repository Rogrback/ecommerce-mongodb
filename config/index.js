import dotenv from 'dotenv'

dotenv.config()

const config = {
  server: {
    port: 3000
  },
  database: {
    uri: process.env.DB_URI
  },
  tokens: {
    secret: process.env.TOKEN_SECRET
  }
}

export default config