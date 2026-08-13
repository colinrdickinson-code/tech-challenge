# Backend Developer Coding Challenge

## Description

Rest API built with NestJS that provides authenticated access to users, albums and photos using JSONPlaceholder data.

## Installation

npm install

## Running the application

npm run start:dev

The API runs on http://localhost:3000

## Authentication

POST /auth/login

Example:

{
  "username": "Bret",
  "password": "password"
}

The response contains a JWT access token.

Authenticated endpoints require:

Authorization: Bearer <token>

## Endpoints

GET /users
GET /albums
GET /albums/:id
GET /photos
GET /photos/:id

## Testing

npm test
npm run test:e2e

Since the JSONPlaceholder does not provide password data, all valid user authenticate using the demo password "password".