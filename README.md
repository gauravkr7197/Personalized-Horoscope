# Personalized Horoscope API

A Node.js backend service that generates and serves personalized daily horoscopes for users based on their zodiac sign.

## Features

- User authentication (Signup/Login)
- Automatic zodiac sign detection based on birthdate
- Daily horoscope generation
- Horoscope history tracking
- Rate limiting
- API documentation with Swagger

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Swagger/OpenAPI

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd personalized-horoscope
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/horoscope
JWT_SECRET=your_jwt_secret_key
```

4. Start the development server:
```bash
npm run dev
```

The server will start on http://localhost:3000

## API Documentation

Once the server is running, you can access the Swagger documentation at:
http://localhost:3000/api-docs

## API Endpoints

### Authentication
- POST /api/auth/signup - Register a new user
- POST /api/auth/login - Login user

### Horoscope
- GET /api/horoscope/today - Get today's horoscope
- GET /api/horoscope/history - Get horoscope history

## Design Decisions

1. **Project Structure**
   - Modular architecture with separate routes, controllers, and models
   - Middleware for authentication and rate limiting
   - Environment-based configuration

2. **Security**
   - JWT-based authentication
   - Password hashing using bcrypt
   - Rate limiting to prevent abuse

3. **Database**
   - MongoDB for flexible schema and easy scaling
   - Mongoose for schema validation and type safety

## Future Improvements

1. Add email verification
2. Implement password reset functionality
3. Add more detailed horoscope content
4. Implement caching for better performance
5. Add unit and integration tests
6. Add user profile management
7. Implement social login options