# 02-mongodb

Express API for managing notes stored in MongoDB.

## Setup

1. Install Node.js and npm.
2. Install dependencies with `npm install`.
3. Copy `.env.example` to `.env` and set `MONGO_URL` to your MongoDB connection string. Keep the variable names `PORT` and `MONGO_URL` unchanged.
4. Start the server with `npm start`.

The API starts listening only after MongoDB connects successfully. The collection name is `notes`.

## Endpoints

- `GET /notes`
- `GET /notes/:noteId`
- `POST /notes`
- `PATCH /notes/:noteId`
- `DELETE /notes/:noteId`