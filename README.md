# Trixie - AI-Powered Coding Assistant 🤖

[![TinkHack 2.0](https://img.shields.io/badge/TinkHack-2.0-blue.svg)](https://github.com/Lionel-Logan/Trixie---AI-Chatbot)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-green.svg)](https://chrome.google.com/webstore)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-brightgreen.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-Frontend-blue.svg)](https://reactjs.org/)

> **Empowering Coders with AI** - An intelligent Chrome extension and platform designed to enhance coding skills through real-time guidance, performance tracking, and gamification.

## 🎯 Problem Statement

India produces over **1.5 million engineering graduates** annually, but **75-80%** struggle to find IT jobs due to skill gaps:

- Only **3.84%** have required technical skills for software roles
- Over **60%** fail campus recruitment aptitude tests  
- **94%** of hiring managers prioritize DSA proficiency
- Graduates often settle for low-paying, non-technical roles

**Trixie** addresses this critical skills gap through interactive AI-powered learning.

## ✨ Key Features

### 🔧 Chrome Extension Chatbot
- **Real-time assistance** while coding on platforms like LeetCode
- **Context-aware AI** powered by Google's Gemini 2.0 Flash model
- **Session-based conversations** that maintain problem context
- **Guided learning approach** - provides hints, not direct solutions
- **Professional tone** with structured, concise responses

### 📊 Dashboard System
- **Visual progress tracking** with pie charts showing solved problems by difficulty
- **Personalized insights** into coding strengths and weaknesses
- **Real-time data integration** from coding platforms
- **Performance analytics** to identify improvement areas

### 🎓 Admin Dashboard (Upcoming)
- **Mentor/Teacher portal** for tracking student progress
- **Comprehensive reporting** based on real-time coding data
- **Weakness analysis** and improvement recommendations

## 🏗️ Architecture

### Tech Stack
```
Frontend:     React.js + Tailwind CSS
Backend:      Node.js + Express.js
Database:     Supabase
AI Engine:    Google Gemini 2.0 Flash API
Visualization: Recharts.js
Extension:    Chrome Extension APIs (Manifest V3)
```

### Project Structure
```
trixie/
├── extension/                 # Chrome Extension
│   ├── manifest.json         # Extension configuration
│   ├── background.js         # Service worker
│   ├── content-scripts/      # Content injection scripts
│   └── extension-ui/         # Popup interface
├── backend-chatbot/          # AI Backend Server
│   ├── server.js            # Express server with Gemini integration
│   ├── chatbot.js           # AI response handler
│   └── package.json         # Backend dependencies
├── frontend/                 # React Dashboard
│   └── src/                 # React components
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- Chrome Browser
- Google Gemini API Key

### 1. Clone the Repository
```bash
git clone https://github.com/Lionel-Logan/Trixie---AI-Chatbot.git
cd Trixie---AI-Chatbot
```

### 2. Backend Setup
```bash
cd backend-chatbot
npm install
```

Create `.env` file:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Start the backend server:
```bash
node server.js
```
Server will run on `http://localhost:5000`

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

### 4. Chrome Extension Installation
1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer Mode** (top-right toggle)
3. Click **Load unpacked** and select the `extension` folder
4. The Trixie extension icon should appear in your toolbar

## 🎮 How to Use

### Getting Started
1. **Visit LeetCode**: Navigate to any problem on LeetCode
2. **Activate Trixie**: Click the extension icon or it will auto-activate
3. **Start Chatting**: Begin conversation about the current problem
4. **Get Guidance**: Receive hints, explanations, and problem-solving strategies

### Sample Interaction
```
User: "I'm stuck on this two-sum problem"

Trixie: "Let's break this down! What approach are you considering? 
Are you thinking about using a brute force method or something more 
efficient? What's your initial strategy for finding two numbers that 
sum to the target?"
```

## 🔧 Core Components

### Chrome Extension (`manifest.json`)
- **Manifest V3** compliance for modern Chrome extension standards
- **Content Scripts** inject on LeetCode problem pages
- **Background Service Worker** manages extension lifecycle
- **Popup Interface** for direct user interaction

### AI Backend (`server.js`)
- **Google Gemini Integration** with custom pre-prompt engineering
- **Session Management** maintains conversation context per user
- **Problem-Aware Responses** adapts to current LeetCode problem
- **CORS Enabled** for cross-origin requests from extension

#### AI Prompt Engineering
- **Pre-prompt** establishes Trixie's personality and behavior
- **Context injection** includes problem title and chat history
- **Response guidelines** ensure educational, not solution-focused answers

## 🔮 Future Enhancements

- 🔄 React Dashboard with progress visualization
- 🔄 Supabase integration for data persistence
- 🔄 Multi-platform support (HackerRank, CodeChef)
- 📋 Admin dashboard for educators
- 📈 Advanced analytics and reporting
- 🎯 Personalized learning paths
- 🏆 Gamification elements

## 🛠️ Development Guidelines

### Code Style
- **Professional tone**: No emojis in AI responses
- **Concise responses**: 100-word limit for AI
- **Educational focus**: Hints over direct solutions
- **Error handling**: Comprehensive try-catch blocks

### AI Behavior Guidelines
- Never provide complete code solutions
- Ask engaging follow-up questions
- Guide through problem-solving thought process
- Maintain conversation flow with critical thinking prompts

## 🏆 Acknowledgments

- **TinkHack 2.0** for providing the platform
- **Google Gemini** for AI capabilities
- **LeetCode** for the coding platform integration
- **Open Source Community** for inspiration and support

<div align="center">

**Trixie - Empowering Coders with AI** 🚀

*Making competitive programming accessible, engaging, and effective for every aspiring developer.*

[![GitHub stars](https://img.shields.io/github/stars/Lionel-Logan/Trixie---AI-Chatbot?style=social)](https://github.com/Lionel-Logan/Trixie---AI-Chatbot/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Lionel-Logan/Trixie---AI-Chatbot?style=social)](https://github.com/Lionel-Logan/Trixie---AI-Chatbot/network/members)

</div>
