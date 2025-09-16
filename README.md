# 🌱 Agro-Smart Climate Dashboard

Agro-Smart Climate is a web platform designed to help farmers and users track **weather conditions, crop activities, and climate-related insights**.  
It integrates **KYC registration**, **real-time weather reports**, and **crop activity monitoring** into one dashboard.

---

## 🚀 Features

- 🔐 **User Authentication & KYC**
  - Users register and complete a KYC form (crops, tools, location, etc.).
  - Data stored securely in Supabase.

- 🌦️ **Weather Reports**
  - Real-time weather data using [OpenWeather API](https://openweathermap.org/api).
  - Current conditions (temperature, humidity, wind, precipitation).
  - Hourly and 7-day forecast.
  - Location fetched automatically from KYC form or user input.

- 🌾 **Crop Activities**
  - Dashboard showing activities related to user’s registered crops.
  - Option to register new crops if none exist.

- 🖥️ **Responsive Dashboard**
  - Sidebar navigation.
  - Works on mobile, tablet, and desktop.
  - Built with **React + Tailwind CSS** for clean UI.

---

## 🛠️ Tech Stack

### Frontend
- **React.js** (functional components, hooks)
- **Tailwind CSS** (styling)
- **React Icons** (icons)

### Backend
- **Express.js** (API server)
- **Supabase** (Auth & Database)
- **OpenWeather API** (Weather data)
- **Render** (Backend hosting)

---

## ⚙️ Installation & Setup

### 1. Clone the repo

git clone https://github.com/your-username/agro-smart-climate.git
cd agro-smart-climate

### 2. Install dependencies

#### Frontend
npm install
#### Backend
cd Backend
npm install

### 3. Configure environment variables
    Create .env file inside Backend/ with:
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
OPENWEATHER_KEY=your_openweather_api_key

### 4. Run locally

#### Frontend
npm run dev

#### Backend
cd Backend
node index.js

### 5. Deployment

Frontend → Host on Netlify or Vercel.

Backend → Host on Render.

## 📂 Project Structure

agro-smart-climate/
├── src/ # React frontend source code
│ ├── components/ # Navbar, Sidebar, WeatherReport, etc.
│ ├── pages/ # Dashboard, Home, etc.
│ ├── App.jsx
│ └── main.jsx
│
├── Backend/ # Express backend
│ ├── index.js # Main API routes
│ ├── package.json
│
├── package.json # Frontend dependencies
└── README.md # Project documentation

## 🤝 Contributing

Fork the repo.

Create a feature branch (git checkout -b feature-name).

Commit changes (git commit -m "Added new feature").

Push branch (git push origin feature-name).

Create a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 👩🏽‍💻 Author

Built with ❤️ by Hameedat.