# Acowale News App

## Overview
This project is a news application developed as part of the Acowale assignment. The application fetches news articles from the GNews API and displays them in a user-friendly interface. It includes search and pagination features and is built with a Node.js/Express backend and a React frontend.

## Features
- Fetch news articles from the GNews API
- Search news articles by keywords
- Filter news by category, language, and country
- Pagination to navigate through news articles
- Responsive design for various devices

## Setup Instructions

### 1. API Key
1. Sign up at [GNews](https://gnews.io) to get an API key.
2. Add the API key to your environment variables as `GNEWS_API_KEY`.

### 2. Backend Setup
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```bash
   npm install
3. Create a .env file and add your API key:
   ```bash
   PORT = 5000
   GNEWS_API_KEY = 
   FRONTEND_URL = http://localhost:5173
4. Start the backend server:
   ```bash
   npm start

### 3. Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
3. Create a .env file and add your API key:
   ```bash
   VITE_BACKEND_API= http://localhost:5000
4. Start the frontend:
   ```bash
   npm start

### 3. Deployment
1. Deploy the frontend to Firebase:
   - Install Firebase CLI
     ```bash
     npm install -g firebase-tools
   - Initialize Firebase and deploy:
     ```bash
     firebase init
     firebase deploy

### Troubleshooting
- CORS Issues: Ensure that the CORS middleware is configured correctly in the backend to allow requests from your frontend origin.
- API Errors: Verify that your API key is correct and that the backend is properly configured to handle API requests.

### Challenges and Solutions
- CORS Issues: Configured CORS headers in Firebase Functions to allow requests from the frontend.
- Responsive Design: Used CSS Flexbox/Grid to ensure the application is responsive across different devices.
