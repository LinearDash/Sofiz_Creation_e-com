# Sofiz Creation E-Commerce Platform

A full-stack e-commerce platform for showcasing and selling beautifully handcrafted products, built with **React (Vite, TailwindCSS)** on the frontend and **Node.js (Express, MongoDB)** on the backend.

---

## Features

### 🛍️ For Shoppers
- **Browse Products:** View products by category, with detailed product pages and images.
- **Modern UI:** Clean, responsive design with TailwindCSS.
- **About & Brand Story:** Learn about the brand’s mission and values.
- **Social Media Integration:** Follow Sofiz Creation on Instagram, Facebook, Threads, and Twitter.

### 🔐 For Admins
- **Admin Dashboard:** Secure login for admins to manage products and view analytics.
- **Product Management:** Add, edit, and view products by category.
- **Order Management:** (Stubbed for future implementation.)

---

## Tech Stack

- **Frontend:** React, Vite, TailwindCSS, React Router, React Query, Axios
- **Backend:** Node.js, Express, MongoDB (Mongoose), JWT Auth, Cloudinary, Multer
- **Deployment:** Vercel (Frontend & Backend)

---

## Project Structure

```
Sofiz_Creation_e-com/
  ├── Backend/   # Express API, MongoDB models, controllers, routes
  └── Frontend/  # React app, components, pages, assets, hooks
```

---

## Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/Sofiz_Creation_e-com.git
cd Sofiz_Creation_e-com
```

### 2. Backend Setup

```bash
cd Backend
npm install
# Create a .env file with your MongoDB URI, JWT secret, etc.
npm run dev
```

### 3. Frontend Setup

```bash
cd ../Frontend
npm install
npm run dev
```

- The frontend will run on [http://localhost:3000](http://localhost:3000) and proxy API requests to the backend.

---

## Deployment (Vercel)

### Frontend

- Deploy the `Frontend/` directory as a Vercel project.
- Use the following `vercel.json` for SPA routing:
  ```json
  {
    "version": 2,
    "routes": [
      { "handle": "filesystem" },
      { "src": "/.*", "dest": "/index.html" }
    ]
  }
  ```
- Set environment variables (e.g., `VITE_API_URL`) in the Vercel dashboard to point to your backend deployment.

### Backend

- Deploy the `Backend/` directory as a separate Vercel project.
- Use the following `vercel.json`:
  ```json
  {
    "version": 2,
    "builds": [
      { "src": "index.js", "use": "@vercel/node" }
    ],
    "routes": [
      { "src": "/(.*)", "dest": "index.js" }
    ]
  }
  ```
- Set environment variables (MongoDB URI, JWT secret, etc.) in the Vercel dashboard.

---

## Environment Variables

### Backend (`.env`)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_url
NODE_ENV=production
```

### Frontend (`.env`)
```
VITE_API_URL=https://your-backend-deployment-url/api
```

---

## API Endpoints

- `POST /api/auth/signup` — User registration
- `POST /api/auth/login` — User/admin login
- `GET /api/product` — List products
- `POST /api/product/addProduct` — Add product (admin)
- ...and more (see backend routes for details)

---

## License

MIT

---

## Author

Sandesh Adhikari
