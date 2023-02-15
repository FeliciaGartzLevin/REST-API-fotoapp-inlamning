import albums from './albums'
import photos from './photos'
import profile from './profile'
import express from "express"
import { login, register } from '../controllers/user_controller'
import { createUserRules } from '../validations/user_rules'

// instantiate a new router
const router = express.Router()

/**
 * GET /
 */
router.get('/', (req, res) => {
	res.send({
		message: "I AM API, BEEP BOOP",
	})
})

/** 
 * /albums of photos from user profile
 */
router.use('/albums', /* validateToken, */ albums)

/**
 * /photos from user profile
*/
router.use('/photos', /* validateToken, */ photos)

/**
 * /user
 */
router.use('/profile', /* validateToken, */ profile)

/**
 * POST /login to profile
 */
router.post('/login', login)

// /**
//  * POST /refresh the profile login
//  */
// router.post('/refresh', refresh)

/**
 * POST /register a profile
 */
router.post('/register', createUserRules, register)

export default router
