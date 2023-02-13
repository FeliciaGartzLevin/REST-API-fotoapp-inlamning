/**
 * Validation rules for Album resource
 */
import { body } from 'express-validator'
import prisma from '../prisma'
// import { getUserById } from '../services/user_service'

export const createAlbumRules = [
	body('title').exists().isString().withMessage('Title has to be made up of letters or numbers'),
    body('user_id').exists().isInt().withMessage('user_id has to be a number').custom(async (value: number) => {
		// check if a User with that id exists
        // I can later use this from user_services as a callback function
		const user = await prisma.user.findUnique({
            where: {
                id: value
            }
        })

		if (!user) {
			// if user doesn't exist, 
			return Promise.reject("No user with that id exists")
		}
	}) ,
]