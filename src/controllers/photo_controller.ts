/**
 * Photo Controller
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'
import { getPhoto, getPhotos, createPhoto } from '../services/photo_service'

// Create a new debug instance
const debug = Debug('mi-REST-API-fotoapp:photo_controller')

/**
 * Get all photos
 */
export const index = async (req: Request, res: Response) => {
    try {
		const photos = await getPhotos()

		res.send({
			status: "success",
			data: photos,
		})

	} catch (err) {
		debug("Error thrown when looking for photos", err)
		res.status(500).send({ status: "error", message: "Something went wrong" })
	}
}

/**
 * Get a single photo
 */
export const show = async (req: Request, res: Response) => {
    const photoId = Number(req.params.bookId)

	try {
		const photo = await getPhoto(photoId)

		res.send({
			status: "success",
			data: photo,
		})

	} catch (err) {
		debug("Error thrown when looking for photo with id %o: %o", req.params.photoId, err)
		return res.status(404).send({ status: "error", message: "Not found" })
	}
}

/**
 * Create a photo
 */
export const store = async (req: Request, res: Response) => {
    try {
		const photo = await createPhoto(req.body)

		res.send({
			status: "success",
			data: photo,
		})

	} catch (err) {
		debug("Error thrown when creating photo with id %o: %o", req.params.photoId, err)
		return res.status(404).send({ status: "error", message: "Not found" })
	}
}

/**
 * Update a photo
 */
export const update = async (req: Request, res: Response) => {
}

/**
 * Delete a photo
 */
export const destroy = async (req: Request, res: Response) => {
}
