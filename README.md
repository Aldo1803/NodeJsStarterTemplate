# Node.js MEAN Stack Application

This project is a starter template for a MEAN (MongoDB, Express.js, Angular, and Node.js) stack application. It features a robust backend setup with user authentication and a well-structured project layout.

## Features

- ES6 Syntax using Node.js
- Express.js as the web server
- MongoDB with Mongoose for data modeling
- User authentication using JSON Web Tokens (JWT)
- Basic user model and controller (sign in, sign up)
- Auth middleware for protected routes
- Multer for file uploads
- CORS and Morgan middleware integration
- Unit testing setup


### Prerequisites

- Node.js and npm (Node Package Manager)
- MongoDB Database

### Getting Started

To get started with this MEAN stack application, follow these steps:

1. **Prerequisites**
        - Node.js and npm (Node Package Manager)
        - MongoDB Database

2. **Installation**
        - Clone the repository:
            ```bash
            git clone https://github.com/Aldo1803/NodeJsStarterTemplate
            cd NodeJsStarterTemplate
            ```

        - Install dependencies:
            ```bash
            npm install
            ```

3. **Set up environment variables**
        - Copy .env.example to a new file .env
        - Fill in the environment variables in .env

4. **Run the application**
        ```bash
            npm start
            ```


## Usage

The project is structured as follows:

- `src/controllers`: Business logic for handling requests.
- `src/models`: Mongoose models for MongoDB.
- `src/routes`: Express routes definitions.
- `src/middlewares`: Express middlewares (e.g., authentication).
- `src/utils`: Utility functions and helpers.
- `tests`: Test cases for the application.

## API Documentation

#### Sign In

- URL: `/api/user/sign-in`
- Method: `POST`
- Body:
    - `email` (required): User's email address.
    - `password` (required): User's password.
- Success Response:
    - Code: `200 OK`
    - Content: `{ userId: "user's unique ID", token: "JWT token" }`
- Error Response:
    - Code: `401 Unauthorized`
    - Content: `{ message: "Authentication failed - User not found" }` or `{ message: "Authentication failed - Invalid password" }`
    - Code: `500 Internal Server Error`
    - Content: `{ message: "Internal server error" }`
- Description: Authenticates a user by their email and password. On success, returns a JWT token and the user's ID.

#### Sign Up

- URL: `/api/user/sign-up`
- Method: `POST`
- Body:
    - `name` (required): User's full name.
    - `email` (required): User's email address.
    - `password` (required): User's password.
    - `avatar` (required): Link to the user's avatar image.
    - `status` (required): User's status.
- Success Response:
    - Code: `201 Created`
    - Content: `{ userId: "new user's unique ID", token: "JWT token" }`
- Error Response:
    - Code: `400 Bad Request`
    - Content: `{ message: "User with this email already exists" }`
    - Code: `500 Internal Server Error`
    - Content: `{ message: "Internal server error" }`
- Description: Registers a new user with the provided details. On successful registration, returns a JWT token and the new user's ID.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Node.js community
- Contributors of the dependencies used in this project
