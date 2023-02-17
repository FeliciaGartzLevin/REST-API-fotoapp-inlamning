/**
 * Photo Albums Router
 */
import express from 'express'
import { createAlbumRules } from '../validations/album_rules'
import { validateToken } from '../middlewares/auth/jwt'
import { index, show, store, update, destroy } from '../controllers/album_controller'
const router = express.Router()

/**
 * GET /albums logik:✅ funkar:❔
 * Get all albums
 */
router.get('/', index)

/**
 * GET /albums/:albumId logik:✅ funkar:❔
 * Get a single album
 */
router.get('/:albumId', show)

/**
 * POST /albums  logik (för 1st):✅ funkar:❔
 * Create a (or more) new album(s)
 * 
 * ([VG]: add muliple at once)
 */
router.post('/', createAlbumRules, store)

/**
 * PATCH /albums/:albumId logik:✅ funkar:❔
 * Update an album
 */
router.patch('/:albumId', [], update)

/**
 * ([VG]:)
 * DELETE /albums/:albumId/photos/:photoId
 * Remove a photo from an album
 */
router.delete('/:albumId/photos/:photoId', destroy /* ? */)

/**
 * ([VG]:)
 * DELETE /albums/:albumId 
 * 	Delete an album
 */
router.delete('/:albumId', destroy)

export default router
