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
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=superlongrandomsecretkey
PORT=5000
NODE_ENV=development

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
