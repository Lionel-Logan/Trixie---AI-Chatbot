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

// Store session data (in-memory store for simplicity)
const userSessions = {};

// Serve chatbot frontend
app.use(express.static(path.join(__dirname, "public")));

// Default route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Pre-prompt to guide Gemini's responses
const prePrompt = `Your name is 'Trixie'. You are a professional and helpful AI assistant for competitive programming. You provide concise and clear explanations, hints, and guidance on problem-solving. You must maintain a professional tone, avoid emojis, and keep your responses short, within 100 words. 

If asked for a solution, guide the user through the thought process, but never provide the full code. 

You should engage the user by asking questions like:
- What do you think is the best approach for this problem?
- What insights or strategies do you have for solving it?
- Have you considered the time complexity of your solution?
- How do you plan to handle edge cases?

You should also offer hints based on the user’s progress. For example, if the user gets stuck, provide helpful nudges instead of direct solutions. Keep the conversation flowing by prompting the user to think critically.

Your responses should be structured and direct, without excessive elaboration. Aim for a 2-way interaction that guides the user through the process of learning and problem-solving. Never ever provide the code, or any snippets of any kind.
`;

// Chatbot API using Gemini
app.post("/chatbot", async (req, res) => {
    const { message, problemTitle, userId } = req.body; // Now receiving problem title and userId for session tracking

    try {
        // Initialize session if not exists
        if (!userSessions[userId]) {
            userSessions[userId] = {
                hasPrePromptExecuted: false, // Track if pre-prompt has been sent
                chatHistory: [], // Store the chat history
                problemTitle: problemTitle || "" // Store problem title for the first message
            };
        }

        const session = userSessions[userId];

        // Start the conversation with pre-prompt if not already done
        let fullPrompt = "";

        if (!session.hasPrePromptExecuted) {
            fullPrompt += prePrompt; // Add the pre-prompt to the first message
            session.hasPrePromptExecuted = true; // Mark as executed
        }

        // If this is the first message, include the problem title in the prompt
        if (session.problemTitle && !session.chatHistory.length) {
            fullPrompt += `\n\nThe user is working on a LeetCode problem titled: "${session.problemTitle}". 
            Provide insights, hints, and explanations related to this problem if relevant.`;
        }

        // Add chat history to the prompt to maintain context (only add previous messages after the first one)
        session.chatHistory.forEach((entry) => {
            fullPrompt += `\nUser: ${entry.user}\nTrixie: ${entry.bot}`;
        });

        // Add the user's current message to the prompt
        fullPrompt += `\n\nUser: ${message}`;

        console.log("📤 Sending to Gemini API:", { message, problemTitle });

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: fullPrompt }] }]
        });

        // Extract response properly
        const botResponse = result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't generate a response.";

        console.log("🤖 Gemini Response:", botResponse);

        // Store response in session chat history
        session.chatHistory.push({ user: message, bot: botResponse });

        res.json({ response: botResponse });

    } catch (error) {
        console.error("❌ Gemini API Error:", error);
        res.status(500).json({ response: "Error processing request." });
    }
});

// Clear chat history when the chat is complete (e.g., when user ends the session)
app.post("/clearChat", (req, res) => {
    const { userId } = req.body;

    if (userSessions[userId]) {
        // Reset the session for the user, clearing the chat history and pre-prompt flag
        userSessions[userId] = {
            hasPrePromptExecuted: false, // Reset pre-prompt execution flag
            chatHistory: [], // Reset chat history
            problemTitle: "" // Clear problem title
        };

        console.log(`💬 Chat history cleared for user ${userId}`);
        res.json({ message: "Chat history cleared. You can start a new conversation." });
    } else {
        res.status(404).json({ message: "User session not found." });
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Chatbot running at http://localhost:${PORT}`));
console.log("🔑 Gemini API Key:", process.env.GEMINI_API_KEY ? "Loaded" : "Not found");
