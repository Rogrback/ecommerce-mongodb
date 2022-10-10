import express from 'express'
import { authController } from '../controllers/index.js'

const router = express.Router()

router.post('/register', authController.register)
router.post('/login', authController.login)

export default router

/*
    "email": "rogrzt@gmail.com",
    "password": "4567"
token
"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2MzQzMWFiNzNkYjk0YTBiNmUxYThhNTQifQ.SYHWsT1w7HU5IWHTArt8axJp2ug0jxFWLwUPEPVCdyU"
*/