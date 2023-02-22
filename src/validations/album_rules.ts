/**
 * Validation rules for Album
 */
import { body } from 'express-validator'
import { getAlbum } from '../services/album_service'
import { Request } from 'express'

export const createAlbumRules = [
	body('title')
		.exists()
			.withMessage('Title is required')
			.bail()
		.isString()
			.withMessage('Title has to be made up of letters or numbers')
			.bail()
		.isLength({min:3})
			.withMessage('Title must be at least 3 chars long'),
]

export const updateAlbumRules = [
	body('title')
		.exists()
			.withMessage('Title is requied')
			.bail()
		.isString()
			.withMessage('Title has to be made up of letters or numbers')
			.bail()
		.isLength({min:3})
			.withMessage('title must be at least 3 letters long'),
]

export const connectPhotosRules = [
	body('photo_id')
		.exists()
			.withMessage('photo_id is required and has to belong to an existing photo')
			.bail()
		.isArray()
			.withMessage('the given value must be in an array')
			.bail()
		.isInt()
			.withMessage('photo_id must be an array of numbers'),
]