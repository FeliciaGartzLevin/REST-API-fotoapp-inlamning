/**
 * Profile Controller
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'

// Create a new debug instance
const debug = Debug('prisma-boilerplate:I_AM_LAZY_AND_HAVE_NOT_CHANGED_THIS_😛')

/**
 * Get all profiles
 */
export const index = async (req: Request, res: Response) => {
}

/**
 * Get a single profile
 */
export const show = async (req: Request, res: Response) => {
}

/**
 * Create a profile
 */
export const store = async (req: Request, res: Response) => {
}

/**
 * Update a profile
 */
export const update = async (req: Request, res: Response) => {
}

/**
 * Delete a profile
 */
export const destroy = async (req: Request, res: Response) => {
}
