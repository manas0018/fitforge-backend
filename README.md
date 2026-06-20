# FitForge – Fitness Tracking Backend Platform

FitForge is a RESTful backend application built using Node.js, Express.js, and MongoDB Atlas. It helps users track workouts, manage fitness goals, monitor body metrics, calculate BMI and maintenance calories, and analyze fitness progress through dashboard analytics.

## Features

* User Authentication & Authorization (JWT)
* Workout Tracking
* Goal Management
* Body Metrics Tracking
* BMI Calculator
* Calorie Calculator
* Workout Streak Tracking
* Dashboard Analytics
* Swagger API Documentation
* Cloud Deployment with Render

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* JWT Authentication
* Swagger UI
* Render
* GitHub

## API Documentation

Swagger UI:

https://fitforge-backend-xaww.onrender.com/api-docs

## Live Deployment

https://fitforge-backend-xaww.onrender.com

## Installation

Clone the repository:

```bash
git clone https://github.com/manas0018/fitforge-backend.git
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
```

Run the project:

```bash
npm run dev
```

## API Modules

### Authentication

* Register User
* Login User

### Workouts

* Create Workout
* View Workouts
* Delete Workout

### Goals

* Create Goal
* View Goals

### Body Metrics

* Add Body Metrics
* View Progress

### Calculations

* BMI Calculator
* Maintenance Calorie Calculator

### Dashboard

* Fitness Analytics

### Streak

* Workout Streak Tracking

## Future Improvements

* React Frontend
* Progress Charts
* AI Fitness Recommendations
* Exercise Recommendation Engine
* Mobile Application

## Author

Manas Kushwaha

B.Tech AIML | Backend Developer

GitHub: https://github.com/manas0018
