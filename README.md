# Recruitment Platform — Next.js + Express + MongoDB

This is a **full-stack recruitment platform prototype** with authentication, user registration, and profile management.

- **Frontend** → Next.js (TypeScript + Tailwind CSS)  
- **Backend** → Express.js + MongoDB (Mongoose)  
- **Auth** → JWT (JSON Web Tokens)  

---

## 🚀 Features
- User registration with hashed passwords (bcrypt).  
- User login with JWT-based authentication.  
- Protected profile endpoint.  
- Frontend with Tailwind styling and API integration.  
- Ready for deployment (Vercel + Render/Railway or full Vercel API route migration).  

---

## 📂 Project Structure
/frontend # Next.js (TypeScript + Tailwind)
/backend # Express + MongoDB (Mongoose)


---

## 🔧 Prerequisites
- [Node.js](https://nodejs.org/) >= 18  
- [npm](https://www.npmjs.com/)  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account or local MongoDB  
- (Optional) [Docker](https://www.docker.com/) for containerized deployment  

---

## ⚙️ Environment Variables

### Backend (`/backend/.env`)
```env
MONGO_URI=mongodb+srv://nkemani46_db_user:X0vugdTqRXWOyf8k@cluster0.c1vbg7y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=bed0e363e475b948dd7fcd949de1a4701f8ffda20a9f9f600e771e29ff5ceb3547992df3d2bac9fba9d4fe687f092a80516221a06cfd4324ffee668cb9c4d180
PORT= 5000


###Run Locally
1. Clone the repo
git clone https://github.com/yourusername/recruitment-platform.git
cd recruitment-platform

2. Backend
cd backend
npm install
node server.js

Backend runs on 👉 http://localhost:5000

3. Frontend
cd ../frontend
npm install
npm run dev


Frontend runs on 👉 http://localhost:3000
