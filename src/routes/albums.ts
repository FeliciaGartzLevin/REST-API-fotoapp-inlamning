/**
 * Photo Albums Router
 */
import express from 'express'
import { connectPhotosRules, createAlbumRules, updateAlbumRules } from '../validations/album_rules'
import { index, show, store, update, destroy, addToAlbum, remove } from '../controllers/album_controller'
const router = express.Router()

/**
 * GET /albums logik:✅ funkar:✅
 * Get all albums
 */
router.get('/', index)

/**
 * GET /albums/:albumId logik:✅ funkar:✅ 
 * Get a single album
 */
router.get('/:albumId', show)

/**
 * POST /albums  logik:✅ funkar:✅
 * Create a new album
 * 
 */
router.post('/', createAlbumRules, store)

/**
 * PATCH /albums/:albumId logik:✅ funkar:✅
 * Update an album
 */
router.patch('/:albumId', updateAlbumRules, update)

/**
 * POST	/albums/:albumId/photos	logik:✅ funkar:✅
 * ([VG]: Add multiple photos an album at once)  logik: ❔ funkar: ❔
 * 
 * Add a photo to an album for the authorized user
 */
router.post('/:albumId/photos', connectPhotosRules, addToAlbum)


/**
 * ([VG]:)
 * DELETE /albums/:albumId/photos/:photoId
 * Remove a photo from an album  logik:✅ funkar:✅
 */
router.delete('/:albumId/photos/:photoId', remove)

/**
 * ([VG]:)
 * DELETE /albums/:albumId 
 * 	Delete an album  logik: ❔ funkar: ❔
 */
router.delete('/:albumId', destroy)

export default router
