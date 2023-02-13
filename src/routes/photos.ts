/**
 * Photos Router
 */
import express from 'express'
import { body } from 'express-validator'
import { index, show, store, update, destroy } from '../controllers/photo_controller'
import { createPhotoRules, updatePhotoRules } from '../validations/photo_rules'
const router = express.Router()

/**
 * GET /photos logik:✅ funkar:❔
 * 	Get all photos
 */
router.get('/', index)

/**
 * GET /photo/:photoId logik:✅ funkar:❔
 * Get a single photo
 */
router.get('/:photoId', show)

/**
 * POST /photo logik:✅ funkar:❔
 * 	Create a new photo
 */
router.post('/', createPhotoRules, store)

/**
 * PATCH /photo/:photoId logik:✅ funkar:❔
 * Update a photo
 */
router.patch('/:photoId', updatePhotoRules, update)

/**
 * ([VG]:) DELETE /photo/:photoId 
 * 	Delete a photo
 */
router.delete('/:photoId', destroy)

export default router
