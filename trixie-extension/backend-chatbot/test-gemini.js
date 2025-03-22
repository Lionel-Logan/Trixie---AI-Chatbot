const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

async function testGemini() {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: "Hello, how are you?" }] }]
        });

        console.log("Full API Response:", JSON.stringify(result, null, 2));

        // Extract response safely
        const botResponse = result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "No response text available";
        console.log("Chatbot Response:", botResponse);

    } catch (error) {
        console.error("Test Error:", error);
    }
}

testGemini();
