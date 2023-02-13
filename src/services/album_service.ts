/**
 * Album Service
 */
import prisma from '../prisma'
import { CreateAlbumData } from "../types"

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
	prisma.album.findUniqueOrThrow({
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
 * @param data Album Details
 */
export const createAlbum = async (data: CreateAlbumData) => {
	return await prisma.album.create({
		data: {
			name: data.name,
		}
	})
}
