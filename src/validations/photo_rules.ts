/**
 * Validation Rules for User resource
 */
import { body } from 'express-validator'
import prisma from '../prisma'
// import { getUserById } from '../services/user_service'

export const createPhotoRules = [
	body('title').exists().isString().withMessage('Title has to be made up of letters or numbers'),
	body('url').exists().isURL().withMessage('URL has to a valid URL-adress'),
    body('comment').isString().withMessage('Comment must be made up of letters'),
	body('user_id').isInt().custom(async (value: number) => {
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
	}),
]
/*
export const updateUserRules = [
	body('name').optional().isString().bail().isLength({ min: 3 }),
	body('email').optional().isEmail(),
	body('password').optional().isString().bail().isLength({ min: 6 }),
]
 */