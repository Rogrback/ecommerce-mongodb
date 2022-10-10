import jwt from 'jwt-simple'
import config from '../../config/index.js'

const authValidator = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    return res.status(401).json({
      msg: 'Authorization not found'
    })
  }

  try {
    const { userId } = jwt.decode(token, config.tokens.secret)
    req.userId = userId
    next()
  } catch (error) {
    res.status(401).json({
      msg: 'Invalid token'
    })
  }
}

export default authValidator