/**
 * Photo Service
 */
import prisma from '../prisma'
import { CreatePhotoData, UpdatePhotoData } from "../types"

/**
 * Get all photos
 */
export const getPhotos = async (sub: number) => {
	return await prisma.photo.findMany({
		where: {
			id: sub,
		},
		select: {
			id: true,
			title: true,
			url: true,
			comment: true,
		} 
	})
}

/**
 * Get a single photo
 *
 * @param photoId The id of the photo to get
 */
export const getPhoto = async (photoId: number, sub: number) => {
	return await prisma.photo.findFirstOrThrow({
		where: {
			id: photoId,
			user_id: sub,
		},
		select: {
			id: true,
			title: true,
			url: true,
			comment: true,
		} 
	})
}

/**
 * Create a photo
 *
 * @param data Photo Details
 */
export const createPhoto = async (data: CreatePhotoData) => {
	return await prisma.photo.create({
		data: {
			title: data.title,
			url: data.url,
			comment: data.comment,	
			user: { connect: {id: data.user_id} }
		} 
	})
}

export const updatePhoto = async (sub: number, photoId: number, data: UpdatePhotoData) => {
	const foundPhoto = prisma.photo.findFirst({
			where: {
				id: photoId,
				user_id: sub 
			},	
	})

	if(!foundPhoto) throw new Error (`Photo not found for id ${photoId}`)

	return await prisma.photo.update({
		where: {
			id: photoId,
		  },
		  data,
	})

	
}
