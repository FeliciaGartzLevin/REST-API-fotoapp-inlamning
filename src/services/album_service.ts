/**
 * Album Service
 */
import prisma from '../prisma'
import { connectPhotoData, CreateAlbumData, UpdateAlbumData } from "../types"

/**
 * Get all albums
 */
export const getAlbums = async (sub:number) => {
	return await prisma.album.findMany({
		where: {
			id: sub,
		},
		select: {
			id: true,
			title: true,
			user_id: true,
		}
	})
}

/**
 * Get a single album
 *
 * @param albumId The id of the album to get
 */
export const getAlbum = async (albumId: number, sub: number) => {
	return await prisma.album.findFirstOrThrow({
		where: {
			id: albumId,
			user_id: sub,
		},
		include: {
			photos: true,
		}
	})
}

/**
 * Create an album
 * 
 * @param data = validatedData from req.body
 * @returns a created album title and a connection to a user
 */
export const createAlbum = async (data: CreateAlbumData) => {
	return await prisma.album.create({
		data: {
			title: data.title,
			user: { connect: {id: data.user_id} }
		}
	})
}

/**
 * Update an album
 * 
 * @param albumId /albums/:albumId
 * @param data = validatedData from req.body
 * @returns 
 */
export const updateAlbum = async (albumId: number, data: UpdateAlbumData) => {
	return await prisma.album.update({
		where: {
			id: albumId
		},
		data	
	})
}

/**
 * Add a photo to an album
 * 
 * @param photoId of the photo the user wants to add to the album
 * @param albumId the album to which the user want to add the photo
 * @returns the connection made between photo and album
 */
export const connectPhoto = async (albumId: number, photoId: number) => {
	return await prisma.album.update({
		where: {
			id: albumId
		},
		data: {
		photos: {connect: { id: photoId} }	
		}
	})
}