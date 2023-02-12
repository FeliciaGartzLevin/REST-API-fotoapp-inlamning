/**
 * Photos Router
 */
import express from 'express'
import { body } from 'express-validator'
import { index, show, store, update, destroy } from '../controllers/_controller'
import { createPhotoRules } from '../validations/photo_rules'
const router = express.Router()

/**
 * GET /photos
 * 	Get all photos
 */
router.get('/', index)

/**
 * GET /photo/:photoId
 * Get a single photo
 */
router.get('/:photoId', show)

/**
 * POST /photo
 * 	Create a new photo
 */
router.post('/', createPhotoRules, store)

/**
 * PATCH /photo/:photoId
 * Update a photo
 */
router.patch('/:photoId', [], update)

/**
 * ([VG]:) DELETE /photo/:photoId
 * 	Delete a photo
 */
router.delete('/:photoId', destroy)

export default router
