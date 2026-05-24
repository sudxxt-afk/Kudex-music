# Kudex Music

A modern, high-performance web music player and library manager built with FastAPI and React.

## Architecture
- **Backend:** FastAPI, SQLAlchemy (Async), PostgreSQL, Redis, JWT Authentication
- **Frontend:** React, TypeScript, Vite, Tailwind CSS, Zustand
- **Deployment:** Docker, Docker Compose, Nginx, Traefik

## Features
- Deep integration with Telegram WebApp (Mini Apps).
- Mock data API with beautiful UI components (PlayerBar, Sidebar, Explore).
- Built-in Pomodoro Focus Timer directly integrated into the dashboard.
- High-fidelity "Nocturnal Immersive" glassmorphic UI.

## How to run locally
1. Clone the repository.
2. Make sure Docker Desktop is installed and running.
3. Run the following command:
   ```bash
   docker-compose up -d --build
   ```
4. Access the application:
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:8000`

## Development
To test locally outside of Telegram, use the `/login` page which automatically utilizes a fallback `TEST_LOCAL` authentication mechanism.
