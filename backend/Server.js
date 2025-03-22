require("dotenv").config(); // Load environment variables

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const app = express();
const authRoutes = require("../backend/src/Routes/AuthRoutes");


// Middleware
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
// Sample Route
app.get("/", (req, res) => {
  res.send("Trixie AI Chatbot Backend is Running!");
});
// PostgreSQL Connection Pool (for direct PostgreSQL usage, though Supabase is preferred)
const pool = new Pool({
    connectionString: process.env.SUPABASE_DB_URL,
    ssl: { rejectUnauthorized: false },
  });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
