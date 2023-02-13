/**
 * Profile Router
 */
import express from 'express'
import { body } from 'express-validator'
import { index, show, store, update, destroy } from '../controllers/profile_controller'
const router = express.Router()

// /**
//  * GET /profile
//  */
// router.get('/', index)

/**
 * GET /profile/:profileId
 */
router.get('/:profileId', show)

/**
 * POST /profile
 */
router.post('/', [], store)

/**
 * PATCH /profile/:profileId
 */
router.patch('/:profileId', [], update)

/**
 * DELETE /profile/:profileId
 */
router.delete('/:profileId', destroy)

export default router
