Syncaura Frontend 🚀

Syncaura Frontend is a modern, scalable React-based frontend application built using Vite and Tailwind CSS.
It provides an intuitive dashboard-driven user interface for managing projects, tasks, chats, attendance, meetings, and more.

The project follows a clean modular architecture with reusable components, layouts, and pages to ensure maintainability and smooth team collaboration.

📁 Repository Structure
FRONTEND/
│
├── public/
│   ├── background/          # Background images
│   ├── fonts/               # Custom fonts
│   ├── images/              # Static images
│   └── vite.svg
│
├── src/
│   ├── assets/              # Icons, images, static assets
│   │
│   ├── components/          # Reusable UI components
│   │   ├── Admin/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   └── userdashboard/
│   │
│   ├── layouts/             # Layout components
│   │   └── MainLayout.jsx
│   │
│   ├── pages/               # Application pages
│   │   ├── AdminDashboard.jsx
│   │   ├── App.css
│   │   ├── Attendance.jsx
│   │   ├── Chat.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Documents.jsx
│   │   ├── index.css
│   │   ├── Meetings.jsx
│   │   ├── Projects.jsx
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   ├── Tasks.jsx
│   │   └── UserDashboard.jsx
│   │
│   ├── store/               # Global state management
│   │   └── useThemeStore.js
│   │
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Application entry point
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

🧩 Features Overview
📊 Dashboard

Admin and User dashboards

Statistics cards

Charts using Chart.js

Responsive grid layouts

🔐 Authentication

Sign In & Sign Up pages

Role-based UI (Admin / User)

Integration-ready for JWT auth

💬 Chat Module

Real-time chat UI

Designed for Socket.IO backend integration

📁 Project & Task Management

Projects listing

Task tracking

Clean and intuitive UI

📅 Attendance & Meetings

Attendance tracking UI

Meetings management interface

🌗 Theme Support

Light / Dark mode

Global theme state using custom store

CSS variables + Tailwind integration

🛠 Tech Stack

React.js

Vite

Tailwind CSS

Chart.js

React Chart.js 2

JavaScript (ES6+)

HTML5 & CSS3

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-org/syncaura-frontend.git
cd FRONTEND

2️⃣ Install Dependencies
npm install

3️⃣ Run the Development Server
npm run dev


The app will run at:

http://localhost:5173

🔗 Backend Integration

This frontend is designed to work with the Syncaura Backend Mono-repo, including:

Auth API

CRUD Services

Leave Management

Real-time Chat (Socket.IO)

API endpoints can be connected using environment variables.

👥 Team Collaboration Rules

Single Git repository for frontend

Follow folder-based responsibility

Do NOT commit node_modules

Pull latest changes before pushing:

git pull origin main


Keep components reusable and modular

🚫 Ignored Files

The following files are excluded via .gitignore:

node_modules/

dist/

.env

IDE config files

📌 Future Enhancements

API integration with backend services

Protected routes & role-based access

Mobile-first UI improvements

Performance optimization

PWA support

Unit & integration testing

📄 License

This project is developed for educational and internal purposes.
License information can be added if required.

🤝 Contributors

Developed and maintained by the Syncaura Frontend Team.

⭐ If you find this project useful, consider starring the repository!