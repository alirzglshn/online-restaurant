# Online Restaurant Platform

A full-stack restaurant ordering and management application built with Django REST Framework on the backend and React.js (Vite) on the frontend. The project covers JWT-based authentication, product management, and role-based access control through a decoupled API architecture.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Django 5.2.5, Django REST Framework |
| Authentication | Simple JWT, CORS Headers |
| Frontend | React.js, Vite, React Router |
| Database | SQLite (portable to PostgreSQL or MySQL) |
| Rendering | Client-Side Rendering (CSR) |

---

## Project Structure

```
online-restaurant/
├── backend/
│   ├── core/           # Models, views, and serializers
│   ├── backend/        # Project settings and root URLs
│   ├── staticfiles/    # Collected static files
│   └── media/          # Uploaded media files
└── frontend/           # React.js (Vite) SPA
```

---

## Features

- User registration and login with JWT authentication
- User profile retrieval and management
- Product listing, search, and detail views including ratings and reviews
- Admin-only endpoints for user and product management
- Fully decoupled frontend and backend

---

## API Reference

**Public**

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products/` | List all products |
| GET | `/product/<id>/` | Get single product details |

**Authenticated Users**

| Method | Endpoint | Description |
|---|---|---|
| POST | `/users/register/` | Register a new user |
| POST | `/users/login/` | Obtain JWT token |
| GET | `/users/profile/` | Retrieve authenticated user profile |

**Admin Only**

| Method | Endpoint | Description |
|---|---|---|
| GET | `/users/` | List all users |

---

## Setup

```bash
# Clone the repository
git clone https://github.com/alirzglshn/online-restaurant.git
cd online-restaurant

# --- Backend ---
cd backend
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# --- Frontend ---
cd ../frontend
npm install
npm run dev
```

Backend runs at `http://127.0.0.1:8000/`  
Frontend runs at `http://localhost:5173/`

---

## Author

Alireza Golshan — Backend Developer (Django)
