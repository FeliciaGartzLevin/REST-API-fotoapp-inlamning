/**
 * Albums Router
 */
import express from 'express'
import { body } from 'express-validator'
import { index, show, store, update, destroy } from '../controllers/_controller'
const router = express.Router()

/**
 * GET /album
 */
router.get('/', index)

/**
 * GET /album/:albumId
 */
router.get('/:albumId', show)

/**
 * POST /album
 */
router.post('/', [], store)

/**
 * PATCH /album/:albumId
 */
router.patch('/:albumId', [], update)

/**
 * DELETE /album/:albumId
 */
router.delete('/:albumId', destroy)

export default router
