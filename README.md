🍽️ Online-Restaurant

A modern full-stack restaurant management and ordering platform built with Django REST Framework and React.js (Vite). Designed to demonstrate real-world full-stack capabilities including authentication, product management, and client-side rendering.

🚀 Project Overview

Online-Restaurant allows users to browse products, view details, and manage accounts. Admins can access user data and product listings, making it a fully functional full-stack web app.

Key highlights:

Backend: Django 5.2.5 + Django REST Framework + Simple JWT Authentication

Frontend: React.js (Vite) with client-side rendering

Database: SQLite (ready to upgrade to PostgreSQL/MySQL)

Full-stack features: Authentication, product CRUD, admin controls, JWT-based security

🗂️ Project Structure
online-restaurant/
├── backend/           # Django REST Framework backend
│   ├── core/          # Main app with models, views, serializers
│   ├── backend/       # Django project settings & root URLs
│   ├── db.sqlite3     # SQLite database
│   ├── staticfiles/   # Collected static files
│   └── media/         # Uploaded media files
└── frontend/          # React.js (Vite) frontend

🛠️ Technologies Used
Layer	Technology
Backend	Django 5.2.5, Django REST Framework, Simple JWT, CORS Headers
Frontend	React.js, Vite, React Router
Database	SQLite
Authentication	JWT Tokens, User Registration/Login
🔑 Features

User registration & login with JWT authentication

User profile management

Admin-only endpoints to manage users and products

Browse and search products

Detailed product views including ratings and reviews

Fully responsive frontend with client-side rendering

📌 API Endpoints (Backend Highlights)

Public endpoints:

Method	Endpoint	Description
GET	/	Hello World / test route
GET	/products/	List all products
GET	/product/<id>/	Get single product details

User endpoints:

Method	Endpoint	Description
POST	/users/register/	Register new user
POST	/users/login/	JWT token login
GET	/users/profile/	Retrieve user profile (auth)

Admin-only endpoints:

Method	Endpoint	Description
GET	/users/	List all users (admin only)
🖥️ Frontend

Built with React.js + Vite for a fast, modern SPA experience

Client-side rendering ensures smooth navigation and responsive UI

Integrates seamlessly with Django REST Framework backend
