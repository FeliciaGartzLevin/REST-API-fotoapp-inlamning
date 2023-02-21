/**
 * Validation rules for Album
 */
import { body } from 'express-validator'

export const createAlbumRules = [
	body('title').exists().withMessage('Title is required').isString().withMessage('Title has to be made up of letters or numbers').isLength({min:3}).withMessage('Title must be at least 3 chars long'),
]

export const updateAlbumRules = [
	body('title').exists().isString().withMessage('Title has to be made up of letters or numbers').isLength({min:3}).withMessage('title must be at least 3 letters long'),
]

export const connectPhotosRules = [
	body('photo_id').exists().withMessage('photo_id is required and has to belong to an existing photo').isArray().isInt().withMessage('photo_id must be an array of numbers'),
]