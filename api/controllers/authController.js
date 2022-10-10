import { User } from '../models/index.js'
import jwt from 'jwt-simple'
import bcrypt from 'bcrypt'
import config from '../../config/index.js'

const register = async (req, res) => {
  try {
    const encrypted = await bcrypt.hash(req.body.password, 10)
    req.body.password = encrypted
    const user = await User.create(req.body)
    user.password = undefined

    return res.json({
      msg: 'Successfully registered user',
      user
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Failed registering user',
      error
    })
  }
}

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email
    })
    if (!user) {
      return res.status(401).json({
        msg: 'Invalid credentials',
      })
    }

    const passwordMatched = await bcrypt.compare(
      req.body.password,
      user.password
    )

    if (!passwordMatched) {
      return res.status(401).json({
        msg: 'Invalid credentials'
      })
    }

    const payload = {
      userId: user.id
    }

    const token = jwt.encode(payload, config.tokens.secret)

    return res.json({
      msg: 'Login Satisfactorio',
      token
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al hacer login',
      error
    })
  }
}

export { register, login }