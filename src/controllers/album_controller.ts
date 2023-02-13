/**
 * Album Controller
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { getAlbum, getAlbums } from '../services/album_service'
import prisma from '../prisma'

// Create a new debug instance
const debug = Debug('mi-REST-API-fotoapp:album_controller')

/**
 * Get all albums
 */
export const index = async (req: Request, res: Response) => {
    try {
		const albums = await getAlbums() 

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
		const album = await getAlbum(albumId)

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
    
}

/**
 * Update an album
 */
export const update = async (req: Request, res: Response) => {
}

/**
 * Delete an album
 */
export const destroy = async (req: Request, res: Response) => {
}
