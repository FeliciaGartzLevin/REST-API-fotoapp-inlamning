/**
 * Album Service
 */
import prisma from '../prisma'
import { CreateAlbumData, UpdateAlbumData } from "../types"

/**
 * Get all albums
 */
export const getAlbums = async () => {
	return await prisma.album.findMany({
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
export const getAlbum = async (albumId: number) => {
	return await prisma.album.findUniqueOrThrow({
		where: {
			id: albumId,
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

 * @param albumId /albums/:albumId
 * @param data = validatedData from req.body
 * @returns 
 */
export const updateAlbum = async (albumId: number, data: UpdateAlbumData) => {
	return await prisma.album.update({
			where: {
				id: albumId
			},
			data: {
			title: data.title,		
		}
	})
}
