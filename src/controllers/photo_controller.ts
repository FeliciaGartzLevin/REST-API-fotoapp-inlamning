/**
 * Photo Controller
 */
import { NotFoundError } from '@prisma/client/runtime'
import Debug from 'debug'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import { getPhoto, getPhotos, createPhoto, updatePhoto, deletePhoto } from '../services/photo_service'

// Create a new debug instance
const debug = Debug('mi-REST-API-fotoapp:photo_controller')

/**
 * Get all photos for the authorized user
 */
export const index = async (req: Request, res: Response) => {
    try {
		const photos = await getPhotos(req.token!.sub)

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
 * Get a single photo for the authorized user
 */
export const show = async (req: Request, res: Response) => {
    const photoId = Number(req.params.photoId)

	try {
		const photo = await getPhoto(photoId, req.token!.sub)

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
 * Create a photo for the authorized user
 */
export const store = async (req: Request, res: Response) => {
    // Check for validation errors
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).send({
			status: "fail",
			data: validationErrors.array(),
		})
	}

	// Get only the validated data from the request
	const validatedData = matchedData(req)

	try {
		const photo = await createPhoto({
			title: validatedData.title,
			url: validatedData.url,
			comment: validatedData.comment,
			user_id: req.token!.sub,
		})

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
 * Update a photo for the authorized user
 */
export const update = async (req: Request, res: Response) => {
	const photoId = Number(req.params.photoId)

    // Check for validation errors
    const validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationErrors.array(),
        })
    }

    // Get only the validated data from the request
    const validatedData = matchedData(req)

    try {
		const foundPhotoId = await getPhoto(photoId, req.token!.sub)
        const photo = await updatePhoto(foundPhotoId.id, validatedData)

        res.send({
            status: "success",
            data: photo,
        })

    } catch (err) {
        debug("Error thrown when updating photo with id %o: %o", req.params.photoId, err)
        return res.status(404).send({ status: "error", message: "Not found" })
    }
}

/**
 * Delete a photo for the authorized user
 */
export const destroy = async (req: Request, res: Response) => {
	const photoId = Number(req.params.photoId)

	try {
		const foundPhotoId = await getPhoto(photoId, req.token!.sub)
        await deletePhoto(foundPhotoId.id)

        res.send({
            status: "success",
            data: null,
        })

		
	} catch (err) {
        debug("Error thrown when deleting photo with id %o: %o", req.params.photoId, err)
        return res.status(404).send({ status: "error", message: "Not found" })
    }
}
