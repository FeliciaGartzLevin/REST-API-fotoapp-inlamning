/**
 * Album Controller
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import { connectPhoto, createAlbum, deleteAlbum, getAlbum, getAlbums, removePhoto, updateAlbum } from '../services/album_service'
import { getPhoto } from '../services/photo_service'

// Create a new debug instance
const debug = Debug('mi-REST-API-fotoapp:album_controller')

/**
 * Get all albums for the authorized user
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
 * Get a single album for the authorized user
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
 * Create an album for the authorized user
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
 * Update an album for the authorized user
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
		const foundAlbum = await getAlbum(albumId, req.token!.sub)
        const album = await updateAlbum(foundAlbum.id, validatedData)

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
 * Add a photo to an album beloning to the authorized user
 */
export const addToAlbum = async (req: Request, res: Response) => {
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
		const foundAlbum = await getAlbum(albumId, req.token!.sub)

		// calling album service to connect photo to album in the db
        await connectPhoto(foundAlbum.id, Number(validatedData.photo_id))

        res.send({
            status: "success",
            data: null,
        })

    } catch (err) {
        debug("Error thrown when updating album with id %o: %o", req.params.albumId, err)
        return res.status(404).send({ status: "error", message: "Not found" })
    }
}

/**
 * Delete a photo from an album for the authorized user
 */
export const remove = async (req: Request, res: Response) => {
    const albumId = Number(req.params.albumId)
    const photoId = Number(req.params.photoId)

    try {
		const foundAlbum = await getAlbum(albumId, req.token!.sub)
        const foundPhoto = await getPhoto(photoId, req.token!.sub)
        const album = await removePhoto(foundAlbum.id, foundPhoto.id)

        res.send({
            status: "success",
            data: null,
        })

    } catch (err) {
        debug("Error thrown when deleting photo with id %o from album with id %o: %o", photoId, albumId, err)
        return res.status(404).send({ status: "error", message: "Not found" })
    }
}


/**
 * Delete an album for the authorized user
 */
export const destroy = async (req: Request, res: Response) => {
    const albumId = Number(req.params.albumId)

	try {
		const foundAlbumId = await getAlbum(albumId, req.token!.sub)
        await deleteAlbum(foundAlbumId.id)

        res.send({
            status: "success",
            data: null,
        })
		
	} catch (err) {
        debug("Error thrown when deleting album with id %o: %o", albumId, err)
        return res.status(404).send({ status: "error", message: "Not found" })
    }
}

