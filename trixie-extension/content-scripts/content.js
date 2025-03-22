console.log("Content script loaded");

// Function to send user messages to the chatbot
async function sendToChatbot(userMessage) {
    try {
        const response = await fetch("http://localhost:5000/chatbot", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userMessage }),
        });

        const data = await response.json();
        return data.response; // Chatbot reply
    } catch (error) {
        console.error("Error communicating with chatbot:", error);
        return "Error connecting to chatbot.";
    }
}

// Chatbot button overlay
function addChatbotButton() {
    const btn = document.createElement("button");
    btn.innerText = "Chat with AI";
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.padding = "10px";
    btn.style.background = "#0078D7";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    btn.style.cursor = "pointer";
    btn.style.zIndex = "10000";

    document.body.appendChild(btn);

    btn.addEventListener("click", async () => {
        const userMessage = prompt("Ask the chatbot:");
        if (!userMessage) return;

        const chatbotReply = await sendToChatbot(userMessage);
        alert("Chatbot Response: " + chatbotReply);
    });
}

addChatbotButton();
