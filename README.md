# Revolut AI No-Code Platform

A powerful, full-stack no-code application generation platform. Describe your application idea in natural language, and the built-in Gemini AI engine will generate fully functional HTML, CSS, and JavaScript, rendering a live sandbox preview instantly.

---

## 🏗️ Project Architecture

The project is structured as a monorepo containing two main components:
- **/backend**: Node.js Express server interfacing with MongoDB and the Gemini API.
- **/frontend**: React client built with Vite, styled with modern vanilla CSS.

---

## ⚡ Quick Start & Local Setup

Follow these steps to get the application running on your local machine:

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.x or higher recommended)
- [npm](https://www.npmjs.com/) 
- A MongoDB instance (Local or MongoDB Atlas)

---

### 1. Backend Setup

Navigate to the backend directory and set it up:

```bash
cd backend
```

#### Install Dependencies:
```bash
npm install
```

#### Configure Environment Variables:
Create a `.env` file in the `backend/` directory:
```env
GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_jwt_signing_secret
MONGODB_URI=your_mongodb_connection_uri
```

#### Start the Server:
```bash
# Start in development mode with nodemon
npm run dev1
```
The backend server will run on `http://localhost:3000` (or the port defined by your environment).

---

### 2. Frontend Setup

Navigate to the frontend directory:

```bash
cd ../frontend
```

#### Install Dependencies:
```bash
npm install
```

#### Configure Environment Variables (Optional):
Create a `.env` file in the `frontend/` directory if you want to point to a custom API:
```env
VITE_API_URL=http://localhost:3000
```
*If left blank, it will automatically fallback to `http://localhost:3000`.*

#### Start the React Client:
```bash
npm run dev
```
The React development server will start at `http://localhost:5173`. Open this URL in your browser to access the app.

---

## 🚀 Live Production Deployment

To take the application live, configure your hosting providers using the following steps:

### 1. Backend (e.g. Render)
- Connect your GitHub repository.
- **Root Directory**: `backend`
- **Build Command**: `npm install`
- **Start Command**: `node server.js`
- **Environment Variables**:
  - `MONGODB_URI`
  - `GEMINI_API_KEY`
  - `JWT_SECRET`

### 2. Frontend (e.g. Vercel)
- Import your GitHub repository.
- **Root Directory**: `frontend`
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**:
  - `VITE_API_URL` (Set to the URL of your live Render backend)

---

## 🛠️ Main Features
- **AI-Powered Code Generation**: Uses Google's Gemini models to generate clean frontend components on the fly.
- **Secure Authentication**: Built-in user registration and JWT-based session security.
- **Live Preview Sandboxing**: Instantly displays generated UI inside an isolated sandbox iframe.
- **Project History**: Save multiple revisions of your generated sites and switch versions dynamically.
