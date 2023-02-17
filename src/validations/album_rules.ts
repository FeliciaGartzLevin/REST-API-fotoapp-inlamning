/**
 * Validation rules for Album
 */
import { body } from 'express-validator'

export const createAlbumRules = [
	body('title').exists().withMessage('Title is required').isString().withMessage('Title has to be made up of letters or numbers').isLength({min:3}).withMessage('Title must be at least 3 chars long'),
]

export const updateAlbumRules = [
	body('title').optional().isString().withMessage('Title has to be made up of letters or numbers'),
]

export const connectPhotoRules = [
	body('photo_id').exists().withMessage('photo_id is required').isInt().withMessage('photo_id has to belong to an existing photo'),
]