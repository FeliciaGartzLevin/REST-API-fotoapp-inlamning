# 📸🤳 FED22 API-utveckling Photoapp

A photo-app made with RESTful API which is following CRUD and JSend standards. It has different endpoints, CRUD operations and JsonWebToken validation inclusive refresh tokens. 
The code is backend code that with the help of eg Postman let's you create several users, add photos and albums that only the posting user can see, add several photos to a users own albums, delete album but not the photos inside, delete photos, update album och photos. All user requests is being validated.



## FED22 API-utveckling Prisma Boilerplate instructions below

This is a starter template/boilerplate for a TypeScript Node.js REST API using Express, Prisma and Express-validator.

## Usage

Create a new repository on your GitHub profile using this template by clicking on **Use this template** above the file list and selecting **Create a new repository**.

After your respository has been created on your GitHub profile, clone the repository, create an `.env` file and copy the contents from `.env.example`. Create a new MySQL-database and change the database-name in `DATABASE_URL` after the last slash to the name of your database.

Run `npm install` to install all packages and then start the server using `npm run dev`.

## Build

Delete the `build/` directory if it exists from a previous build, and then run `npm run build` to transpile TypeScript into JavaScript.
