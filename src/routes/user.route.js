import userRegister from '../controllers/user.controller.js'
import { Router } from "express"

const router = Router()

router.post('/register', userRegister)

export default router
