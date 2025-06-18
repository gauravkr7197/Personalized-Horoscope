# API Examples - Personalized Horoscope API

## Base URL
```
http://localhost:3000
```

## Authentication Endpoints

### 1. User Signup
**Endpoint:** `POST /api/auth/signup`

**Request Body:**
```json
{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123",
    "birthdate": "1990-05-15"
}
```

**Response (201 Created):**
```json
{
    "success": true,
    "message": "User registered successfully",
    "data": {
        "user": {
            "id": "507f1f77bcf86cd799439011",
            "name": "John Doe",
            "email": "john.doe@example.com",
            "zodiacSign": "Taurus"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
}
```

### 2. User Login
**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

**Response (200 OK):**
```json
{
    "success": true,
    "message": "Login successful",
    "data": {
        "user": {
            "id": "507f1f77bcf86cd799439011",
            "name": "John Doe",
            "email": "john.doe@example.com",
            "zodiacSign": "Taurus"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
}
```

## Horoscope Endpoints

### 3. Get Today's Horoscope
**Endpoint:** `GET /api/horoscope/today`

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response (200 OK):**
```json
{
    "success": true,
    "data": {
        "zodiacSign": "Taurus",
        "date": "2024-01-15T00:00:00.000Z",
        "content": "Focus on stability and security today. Your practical approach will help you achieve your goals.",
        "mood": "Positive",
        "luckyNumber": 42
    }
}
```

### 4. Get Horoscope History
**Endpoint:** `GET /api/horoscope/history`

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response (200 OK):**
```json
{
    "success": true,
    "data": [
        {
            "zodiacSign": "Taurus",
            "date": "2024-01-15T00:00:00.000Z",
            "content": "Focus on stability and security today. Your practical approach will help you achieve your goals.",
            "mood": "Positive",
            "luckyNumber": 42
        },
        {
            "zodiacSign": "Taurus",
            "date": "2024-01-14T00:00:00.000Z",
            "content": "Your determination will lead you to success today. Trust your instincts.",
            "mood": "Neutral",
            "luckyNumber": 17
        },
        {
            "zodiacSign": "Taurus",
            "date": "2024-01-13T00:00:00.000Z",
            "content": "A day of growth and learning awaits. Embrace new opportunities.",
            "mood": "Positive",
            "luckyNumber": 89
        }
    ]
}
```

## Error Responses

### 1. Validation Error (400 Bad Request)
```json
{
    "success": false,
    "message": "Email already registered"
}
```

### 2. Authentication Error (401 Unauthorized)
```json
{
    "success": false,
    "message": "Authentication required"
}
```

### 3. Server Error (500 Internal Server Error)
```json
{
    "success": false,
    "message": "Something went wrong!",
    "error": "Database connection failed"
}
```

## Zodiac Sign Date Ranges

Here are the date ranges for each zodiac sign:

- **Aries**: March 21 - April 19
- **Taurus**: April 20 - May 20
- **Gemini**: May 21 - June 20
- **Cancer**: June 21 - July 22
- **Leo**: July 23 - August 22
- **Virgo**: August 23 - September 22
- **Libra**: September 23 - October 22
- **Scorpio**: October 23 - November 21
- **Sagittarius**: November 22 - December 21
- **Capricorn**: December 22 - January 19
- **Aquarius**: January 20 - February 18
- **Pisces**: February 19 - March 20

## Testing Examples

### Using cURL

1. **Signup:**
```bash
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "password": "password123",
    "birthdate": "1985-08-10"
  }'
```

2. **Login:**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane.smith@example.com",
    "password": "password123"
  }'
```

3. **Get Today's Horoscope:**
```bash
curl -X GET http://localhost:3000/api/horoscope/today \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

4. **Get Horoscope History:**
```bash
curl -X GET http://localhost:3000/api/horoscope/history \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Using Postman

1. **Signup Request:**
   - Method: POST
   - URL: `http://localhost:3000/api/auth/signup`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
   ```json
   {
       "name": "Alice Johnson",
       "email": "alice.johnson@example.com",
       "password": "password123",
       "birthdate": "1992-12-25"
   }
   ```

2. **Login Request:**
   - Method: POST
   - URL: `http://localhost:3000/api/auth/login`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
   ```json
   {
       "email": "alice.johnson@example.com",
       "password": "password123"
   }
   ```

3. **Get Today's Horoscope:**
   - Method: GET
   - URL: `http://localhost:3000/api/horoscope/today`
   - Headers: `Authorization: Bearer YOUR_JWT_TOKEN`

4. **Get Horoscope History:**
   - Method: GET
   - URL: `http://localhost:3000/api/horoscope/history`
   - Headers: `Authorization: Bearer YOUR_JWT_TOKEN`

## Notes

- All dates should be in ISO format (YYYY-MM-DD)
- JWT tokens expire after 24 hours
- Rate limiting: 5 requests per minute per IP
- Swagger documentation available at: `http://localhost:3000/api-docs` 