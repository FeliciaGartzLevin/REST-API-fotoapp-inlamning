/**
 * Validation rules for Album
 */
import { body } from 'express-validator'
import { getUserById } from '../services/user_service'
import Debug from 'debug'

// Create a new debug instance
const debug = Debug('mi-REST-API-fotoapp:album_rules')



export const createAlbumRules: any[] = [
	body('title').exists().withMessage('Title is required').isString().withMessage('Title has to be made up of letters or numbers').isLength({min:3}).withMessage('Title must be at least 3 chars long'),
    body('user_id').exists().withMessage('user_id is required').isInt().withMessage('user_id has to be a number').custom(async (value: number) => {
		// check if a User with that id exists
		const user = await getUserById(value)

		if (!user) {
			// if user doesn't exist, 
			return Promise.reject("No user with that id exists")
		}
	}),

	// debug("Error thrown when validating album", Error)

]

export const updateAlbumRules: any[] = [
	body('title').optional().isString().withMessage('Title has to be made up of letters or numbers'),

	// debug("Error thrown when validating album", Error)

]