# Horoscope Client - React Frontend

A beautiful and intuitive React frontend for the Personalized Horoscope API.

## Features

- ✨ Modern, responsive UI design
- 🔐 User authentication (signup/login)
- 🌟 Daily horoscope display
- 📚 Horoscope history tracking
- 📱 Mobile-friendly design
- 🎨 Beautiful gradient backgrounds and animations
- 🔔 Toast notifications for user feedback

## Tech Stack

- React 18
- React Router DOM
- Axios for API calls
- React Toastify for notifications
- CSS3 with modern styling

## Setup Instructions

1. **Navigate to the client directory:**
```bash
cd client
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

The React app will start on `http://localhost:8080` (backend runs on port 3000).

## Prerequisites

Make sure the backend server is running on `http://localhost:3000` before starting the frontend.

## Available Scripts

- `npm start` - Start the development server on port 8080
- `npm build` - Build the app for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## Project Structure

```
client/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── Dashboard.js
│   │   ├── TodayHoroscope.js
│   │   └── HoroscopeHistory.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Features Overview

### Authentication
- **Signup**: Create account with name, email, password, and birthdate
- **Login**: Authenticate with email and password
- **Auto-login**: Remembers user session using localStorage

### Dashboard
- Welcome message with user's zodiac sign
- Quick access to today's horoscope and history
- User information display

### Today's Horoscope
- Displays personalized daily horoscope
- Shows mood and lucky number
- Beautiful zodiac-themed design
- Daily tips and guidance

### Horoscope History
- Shows last 7 days of horoscopes
- Each entry includes date, content, mood, and lucky number
- Empty state with call-to-action

## UI/UX Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Loading States**: Spinner animations during API calls
- **Error Handling**: User-friendly error messages
- **Toast Notifications**: Success and error feedback
- **Smooth Animations**: Hover effects and transitions
- **Zodiac Emojis**: Visual representation of zodiac signs
- **Gradient Backgrounds**: Beautiful purple gradient theme

## API Integration

The frontend communicates with the backend API endpoints:
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User authentication
- `GET /api/horoscope/today` - Get today's horoscope
- `GET /api/horoscope/history` - Get horoscope history

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

The app uses a proxy configuration to forward API requests to the backend server running on port 3000. This is configured in `package.json`:

```json
{
  "proxy": "http://localhost:3000"
}
```

## Port Configuration

- **Frontend**: Runs on `http://localhost:8080`
- **Backend**: Runs on `http://localhost:3000`
- **API Calls**: Automatically proxied from 8080 to 3000

## Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build/` directory that can be deployed to any static hosting service. 