/**
 * Album Controller
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import { createAlbum, getAlbum, getAlbums, updateAlbum } from '../services/album_service'
import prisma from '../prisma'

// Create a new debug instance
const debug = Debug('mi-REST-API-fotoapp:album_controller')

/**
 * Get all albums
 */
export const index = async (req: Request, res: Response) => {
    try {
		const albums = await getAlbums(req.token!.sub) 

		res.send({
			status: "success",
			data: albums,
		})

	} catch (err) {
		debug("Error thrown when finding albums", err)
		res.status(500).send({ status: "error", message: "Something went wrong" })
	}
}

/**
 * Get a single album
 */
export const show = async (req: Request, res: Response) => {
    const albumId = Number(req.params.albumId)

	try {
		const album = await getAlbum(albumId, req.token!.sub)

		res.send({
			status: "success",
			data: album,
		})

	} catch (err) {
		debug("Error thrown when finding album with id %o: %o", req.params.albumId, err)
		return res.status(404).send({ status: "error", message: "Not found" })
	}
}

/**
 * Create an album
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
		const album = await createAlbum({
			title: validatedData.title,
            user_id: req.token!.sub,
		})

		res.send({
			status: "success",
			data: album,
		})

	} catch (err) {
		debug("Error thrown when creating album with id %o: %o", req.params.albumId, err)
		return res.status(404).send({ status: "error", message: "Not found" })
	}
}

/**
 * Update an album
 */
export const update = async (req: Request, res: Response) => {
    const albumId = Number(req.params.albumId)

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
        const album = await updateAlbum(albumId, {
            title: validatedData.title  
        })

        res.send({
            status: "success",
            data: album,
        })

    } catch (err) {
        debug("Error thrown when updating album with id %o: %o", req.params.albumId, err)
        return res.status(404).send({ status: "error", message: "Not found" })
    }
}

/**
 * Delete an album
 */
export const destroy = async (req: Request, res: Response) => {
}
