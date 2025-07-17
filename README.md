# 🏆 Points Claim Leaderboard App

A full-stack web application where users can claim random points, get ranked on a real-time leaderboard, and track all claim history.  
Built as part of Round 1 Task for **3W Business Pvt. Ltd.**

---

## 📌 Features

- Select a user from a list or add new users dynamically
- Claim random points (1–10) with a single click
- View real-time leaderboard with updated ranks
- Special podium layout for Top 3 users
- Claim history stored in MongoDB
- Clean and responsive UI (mobile-ready)

---

## 🚀 Tech Stack

| Layer     | Technology             |
|-----------|------------------------|
| Frontend  | React.js, Axios, CSS   |
| Backend   | Node.js, Express.js    |
| Database  | MongoDB Atlas          |

---

## 🗂️ Folder Structure
points-claim-app/
├── backend/ # Node.js + Express + MongoDB
├── frontend/ # React.js UI
└── README.md


---

## ⚙️ Local Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/points-claim-app.git
cd points-claim-app 


2. Setup Backend
bash
Copy
Edit
cd backend
npm install
Create a .env file in backend/ with:

ini
Copy
Edit
MONGO_URI=your_mongo_db_connection_string
Then run:

bash
Copy
Edit
node server.js

3. Setup Frontend
Open a new terminal:

bash
Copy
Edit
cd frontend
npm install
npm start
```
## 🌐 Live Demo (if deployed)
cpp
Copy
Edit
Frontend: https://your-netlify-app-url.netlify.app
