/**
 * Validation rules for User
 */
import { body } from 'express-validator'
import { getUserByEmail } from '../services/user_service'
import Debug from 'debug'

// Create a new debug instance
const debug = Debug('mi-REST-API-fotoapp:user_rules')

export const createUserRules = [
	body('email').exists().withMessage('email is required').isEmail().withMessage('email has to be a valid email-adress').custom(async (value: string) => {
		// check if a User with that email already exists
		const user = await getUserByEmail(value)

		if (user) {
			// user already exists, throw an error
			return Promise.reject("Email must be unique but this one already has a user")
		}
	}),
	body('password').exists().withMessage('password is required').isString().withMessage('password has to be made up of letters or numbers').isLength({min:6}).withMessage('password must be at least 3 chars long'),
    body('first_name').exists().withMessage('first_name is required').isString().withMessage('first_name has to be made up of letters or numbers').isLength({min:3}).withMessage('first_name must be at least 3 chars long'),
	body('last_name').exists().withMessage('last_name is required').isString().withMessage('last_name has to be made up of letters or numbers').isLength({min:3}).withMessage('last_name must be at least 3 chars long'),

    // debug("Error thrown when validating user", Error)

]

export const loginUserRules = [
    body('email').exists().withMessage('email is required').isEmail().withMessage('email has to be a valid email-adress').custom(async (value: string) => {
		// check if a User with that email already exists
		const user = await getUserByEmail(value)

		if (!user) {
			// if no such user exists, throw an error
			return Promise.reject("there's no user with that email-adress")
		}
	}),
	body('password').exists().withMessage('password is required').isString().withMessage('Password has to be made up of letters or numbers').isLength({min:6}).withMessage('Password must be at least 6 chars long'),
]

export const updateUserRules = [
	body('email').optional().isEmail().withMessage('email has to be a valid email-adress').custom(async (value: string) => {
		// check if a User with that email already exists
		const user = await getUserByEmail(value)

		if (user) {
			// user already exists, throw an error
			return Promise.reject("email must be unique but this one is already connected to a user")
		}
	}),
	body('password').optional().isString().withMessage('password has to be made up of letters or numbers').isLength({min:6}).withMessage('password must be at least 6 chars long'),
    body('first_name').optional().isString().withMessage('first_name has to be made up of letters or numbers').isLength({min:3}).withMessage('first_name must be at least 3 chars long'),
	body('last_name').optional().isString().withMessage('last_name has to be made up of letters or numbers').isLength({min:3}).withMessage('last_name must be at least 3 chars long'),

    // debug("Error thrown when validating user", Error)

]
