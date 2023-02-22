/**
 * Validation Rules for Photo
 */
import { body } from 'express-validator'
import { getUserById } from '../services/user_service'
import Debug from 'debug'

// Create a new debug instance
const debug = Debug('mi-REST-API-fotoapp:photo_rules')


export const createPhotoRules = [
	body('title')
		.trim()
		.exists()
			.withMessage('Title is required')
			.bail()
		.isString()
			.withMessage('Title has to be made up of letters or numbers')
			.bail()
		.isLength({min:3})
			.withMessage('Title must be at least 3 chars long'),
	body('url')
		.trim()
		.exists()
			.withMessage('URL is required')
			.bail()
		.isURL()
			.withMessage('URL has to be a valid URL-adress'),
    body('comment')
		.trim()
		.optional()
		.isString()
			.withMessage('Comment must be made up of letters')
			.bail()
		.isLength({min:3})
			.withMessage('Comment must be at least 3 chars long'),
]

export const updatePhotoRules = [
	body('title')
		.trim()
		.optional()
		.isString()
			.withMessage('Title has to be made up of letters or numbers')
			.bail()
		.isLength({min:3})
			.withMessage('Title must be at least 3 chars long'),
	body('url')
		.trim()
		.optional()
		.isURL()
			.withMessage('URL has to be a valid URL-adress'),
    body('comment')
		.trim()
		.optional()
		.isString()
			.withMessage('Comment must be made up of letters')
			.bail()
		.isLength({min:3})
			.withMessage('Comment must be at least 3 chars long'),
]
