/**
 * Photos Router
 */
import express from 'express'
import { body } from 'express-validator'
import { index, show, store, update, destroy } from '../controllers/_controller'
const router = express.Router()

/**
 * GET /photo
 */
router.get('/', index)

/**
 * GET /photo/:photoId
 */
router.get('/:photoId', show)

/**
 * POST /photo
 */
router.post('/', [], store)

/**
 * PATCH /photo/:photoId
 */
router.patch('/:photoId', [], update)

/**
 * DELETE /photo/:photoId
 */
router.delete('/:photoId', destroy)

export default router
