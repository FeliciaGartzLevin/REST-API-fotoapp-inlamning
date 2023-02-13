/**
 * Type Definitions
 */

export type CreatePhotoData = {
	title: string,
	url: string,
	comment?: string,
	user_id: number,

}

export type CreateAlbumData = {
	title: string,
}

export type CreateUserData = {
	name: string,
	email: string,
	password: string,
}

export type JwtPayload = {
	sub: number,
	name: string,
	email: string,
	iat?: number,
	exp?: number,
}
