/**
 * Photo Service
 */
import { connect } from 'http2'
import prisma from '../prisma'
import { CreatePhotoData } from "../types"

/**
 * Get all photos
 */
export const getPhotos = async () => {
	return await prisma.photo.findMany()
}

/**
 * Get a single photo
 *
 * @param photoId The id of the photo to get
 */
export const getPhoto = async (photoId: number) => {
	return await prisma.photo.findUniqueOrThrow({
		where: {
			id: photoId,
		},
	})
}

/**
 * Create a photo
 *
 * @param data Photo Details
 */
export const createPhoto = async (data: CreatePhotoData) => {
	return await prisma.photo.create({
		data: /* data */  {
			title: data.title,
			url: data.url,
			comment: data.comment,	
			user_email: data.user_email,
		} 
	})
}
