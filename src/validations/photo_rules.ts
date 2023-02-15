/**
 * Validation Rules for Photo
 */
import { body } from 'express-validator'
import { getUserById } from '../services/user_service'
import Debug from 'debug'

// Create a new debug instance
const debug = Debug('mi-REST-API-fotoapp:photo_rules')


export const createPhotoRules = [
	body('title').exists().withMessage('Title is required').isString().withMessage('Title has to be made up of letters or numbers').isLength({min:3}).withMessage('Title must be at least 3 chars long'),
	body('url').exists().withMessage('URL is required').isURL().withMessage('URL has to be a valid URL-adress'),
    body('comment').optional().isString().withMessage('Comment must be made up of letters').bail().isLength({min:3}).withMessage('Comment must be at least 3 chars long'),
	// body('user_email').isEmail().withMessage('Must be a valid email-adress'),
	 body('user_id').exists().withMessage('user_id is required').isInt().custom(async (value: number) => {
		// check if a User with that id exists
        // jag tror att denna inte kommer användas utan att jag POSTar foton under /:userId. kolla videos från detta 
		const user = await getUserById(value)

		if (!user) {
			// if user doesn't exist, 
			return Promise.reject("No user with that id exists")
		}
	}) ,

	// debug("Error thrown when validating photo", Error)

]

export const updatePhotoRules = [
	body('title').optional().isString().withMessage('Title has to be made up of letters or numbers').isLength({min:3}).withMessage('Title must be at least 3 chars long'),
    body('comment').optional().isString().withMessage('Comment must be made up of letters').bail().isLength({min:3}).withMessage('Comment must be at least 3 chars long'),

	// debug("Error thrown when validating photo", Error)
]

/*
export const updateUserRules = [
	body('name').optional().isString().bail().isLength({ min: 3 }),
	body('email').optional().isEmail(),
	body('password').optional().isString().bail().isLength({ min: 6 }),
]
 */