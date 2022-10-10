import express from 'express'
import authValidator from './middlewares/authValidator.js'
import {
  authRoutes,
  userRoutes,
  productRoutes,
  cartRoutes,
} from './routes/index.js'

const api = express()

//Express Config
api.use(express.json());

api.get('/status', (_, res) => {
  res.json({
    msg: 'API Online and working',
  });
});

// Middlewares
api.use(authRoutes)

api.use(authValidator)
api.use(userRoutes)
api.use(productRoutes)
api.use(cartRoutes)

export default api