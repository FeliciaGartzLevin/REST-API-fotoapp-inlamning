/**
 * Photos Router
 */
import express from 'express'
import { index, show, store, update, destroy } from '../controllers/photo_controller'
import { validateToken } from '../middlewares/auth/jwt'
import { createPhotoRules, updatePhotoRules } from '../validations/photo_rules'
const router = express.Router()

/**
 * GET /photos logik:✅ funkar:✅
 * 	Get all photos for the authorized user
 */
router.get('/', index)

/**
 * GET /photo/:photoId logik:✅ funkar:✅
 * Get a single photo for the authorized user
 */
router.get('/:photoId', show)

/**
 * POST /photo logik:✅ funkar:✅
 * 	Create a new photo for the authorized user
 */
router.post('/', createPhotoRules, store)

/**
 * PATCH /photo/:photoId logik:✅ funkar: ✅ 
 * Update a photo for the authorized user
 */
router.patch('/:photoId', updatePhotoRules, update)

/**
 * ([VG]:) DELETE /photo/:photoId logik: ✅ funkar: ✅
 * 	Delete a photo for the authorized user
 */
router.delete('/:photoId', destroy)

export default router
