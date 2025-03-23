const express = require("express");
const path = require("path");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors()); // Allow all origins

// Load API key from .env file
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Serve chatbot frontend
app.use(express.static(path.join(__dirname, "public")));

// Default route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Pre-prompt to guide Gemini's responses
const prePrompt = `Your name is 'Trixie'. You are a helpful AI assistant for competitive programming. 
You provide clear explanations, hints, and coding guidance. 
If asked for a solution, guide the user but do not directly provide full code.
Use structured responses and examples where necessary.`;

// Chatbot API using Gemini
app.post("/chatbot", async (req, res) => {
    const { message } = req.body;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        // Combine pre-prompt with user message
        const fullPrompt = `${prePrompt}\n\nUser: ${message}`;

        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: fullPrompt }] }]
        });

        // Extract response properly
        const botResponse = result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't generate a response.";
        res.json({ response: botResponse });

    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ response: "Error processing request." });
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Chatbot running at http://localhost:${PORT}`));
console.log("Gemini API Key:", process.env.GEMINI_API_KEY ? "Loaded" : "Not found");
