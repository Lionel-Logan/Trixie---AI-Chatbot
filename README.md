# Navigate to your project directory
cd /path/to/your/project

# Trixie - AI-Powered Coding Assistant

Trixie is an AI-powered Chrome extension and platform designed to enhance your coding skills through real-time guidance, performance tracking, and gamification.
# Problem Statement
India produces over 1.5 million engineering graduates each year, but 75-80% of them struggle to find jobs in the IT sector due to a lack of skills in Data Structures and Algorithms (DSA) and aptitude. Despite holding degrees, only 3.84% of graduates have the technical skills required for software roles, while over 60% fail campus recruitment aptitude tests. Since 94% of hiring managers prioritize DSA proficiency in technical interviews, graduates without these skills face limited job opportunities, often settling for low-paying, non-technical roles or experiencing slow career growth.

# Our Solution
To address this issue, we offer Trixie, an interactive learning solution designed to enhance DSA and aptitude skills. Trixie functions as a Chrome extension chatbot, providing real-time, interactive learning support. Additionally, our website tracks students' problem-solving progress, highlighting their strengths and weaknesses. It offers real-time data insights and generates a comprehensive academic review, helping students identify areas for improvement and boosting their overall employability.

## 🚀 Features Implemented

- **Landing Page**:
  - Install Chrome Extension button
  - Login button redirects to the dashboard
  - Admin Login button (to be implemented later)

- **Dashboard**:
  - Displays a **Pie Chart** representing the number of questions solved and their difficulty levels (Easy, Medium, Hard)
  - Provides personalized insights into your **Strengths and Weaknesses** in various skill areas

- **Data Management**:
  - Data is stored and managed using **Supabase**
  - Real-time coding data is extracted from coding platforms like **LeetCode**

- **AI Chatbot**:
  - Available as a **Chrome Extension** that works in the background while you're on coding platforms
  - Trained to analyze problem complexity and generate helpful responses
  - Provides actionable insights, explanations, and coding tips
  - Enables interactive learning with follow-up questions based on your progress

- **Admin Dashboard (Upcoming)**:
  - Admin login for mentors and teachers
  - Track student progress and analyze their strengths and weaknesses
  - Generate reports based on real-time data

## 🧑‍💻 How It Works

1. **Install the Chrome Extension**: Access it directly from the landing page.
2. **Log In**: Choose to log in as a user or an admin (admin login functionality will be implemented later).
3. **Dashboard Overview**: Visualize coding progress through insightful charts and data fetched from Supabase.
4. **Engage with the Chatbot**: Converse with the AI chatbot while solving problems on platforms like LeetCode.
5. **Track Progress**: Analyze strengths and weaknesses and receive AI-generated suggestions for improvement.

## 📦 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: Supabase
- **AI**: Custom-trained AI using Gemini API
- **Charting**: Recharts.js
- **Browser Extension**: Chrome Extension APIs

## 🛠️ Installation Guide

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/trixie.git
   ```
2. Navigate to the frontend:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```

5. Navigate to the chatbot:
   ```bash
   cd ..
   cd trixie-extension/backend-chatbot
   node server.js
   ```
   
5. For the Chrome extension:
   - Navigate to `chrome://extensions/`
   - Enable **Developer Mode**
   - Load the unpacked extension from the `extension` folder.

## 📧 Contact

For further queries, feel free to reach out.

---

**Trixie - Empowering Coders with AI.**
