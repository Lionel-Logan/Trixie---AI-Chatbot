document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const scrollBtn = document.getElementById("scroll-down");
    const trixieBtn = document.getElementById("trixie-btn");

    let problemTitle = "Unknown Problem"; // Default if no title received

    // Receive problem title from content.js
    chrome.runtime.onMessage.addListener((message) => {
        if (message.type === "problemTitle") {
            console.log("📩 Received problem title:", message.title);
            problemTitle = message.title;
        }
    });

    function addMessage(text, isUser) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", isUser ? "user-message" : "bot-message");

        const messageText = document.createElement("p");
        messageText.textContent = text;
        messageText.style.opacity = "0"; 
        messageText.style.transition = "opacity 0.5s ease-in-out";

        messageElement.appendChild(messageText);
        chatBox.appendChild(messageElement);

        setTimeout(() => {
            messageText.style.opacity = "1"; 
        }, 50);

        chatBox.scrollTop = chatBox.scrollHeight;
        return messageElement;
    }

    function showTypingIndicator() {
        const typingElement = document.createElement("div");
        typingElement.classList.add("typing-indicator");
        typingElement.innerHTML = `<span></span><span></span><span></span>`;
        chatBox.appendChild(typingElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        return typingElement;
    }

    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;

        addMessage(message, true);
        userInput.value = "";

        const typingIndicator = showTypingIndicator(); 

        try {
            console.log("📤 Sending to chatbot:", { message, problemTitle });

            const response = await fetch("http://localhost:5000/chatbot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message, problemTitle }), 
            });

            const data = await response.json();
            console.log("🤖 Chatbot Response:", data);

            chatBox.removeChild(typingIndicator); 
            addMessage(data.response, false);
        } catch (error) {
            console.error("❌ Chatbot connection error:", error);
            chatBox.removeChild(typingIndicator); 
            addMessage("Error connecting to chatbot.", false);
        }
    }

    sendBtn.addEventListener("click", sendMessage);

    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); 
            sendMessage();
        }
    });

    scrollBtn.addEventListener("click", function () {
        chatBox.scrollTo({ top: chatBox.scrollHeight, behavior: "smooth" });
    });

    trixieBtn.addEventListener("click", function () {
        console.log("Trixie button clicked, sending message to background...");
        chrome.runtime.sendMessage({ action: "openTab" }, (response) => {
            if (chrome.runtime.lastError) {
                console.error("Runtime error:", chrome.runtime.lastError);
            } else {
                console.log("Response from background:", response);
            }
        });
    });
});
