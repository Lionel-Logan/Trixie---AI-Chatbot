document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const scrollBtn = document.getElementById("scroll-down");
    const trixieBtn = document.getElementById("trixie-btn"); // New button

    function addMessage(text, isUser) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", isUser ? "user-message" : "bot-message");

        const messageText = document.createElement("p");
        messageText.textContent = text;
        messageText.style.opacity = "0"; // Start invisible
        messageText.style.transition = "opacity 0.5s ease-in-out";

        messageElement.appendChild(messageText);
        chatBox.appendChild(messageElement);

        setTimeout(() => {
            messageText.style.opacity = "1"; // Fade-in effect
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

        const typingIndicator = showTypingIndicator(); // Show typing dots

        try {
            const response = await fetch("http://localhost:5000/chatbot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
            });

            const data = await response.json();

            chatBox.removeChild(typingIndicator); // Remove typing dots
            addMessage(data.response, false);
        } catch (error) {
            chatBox.removeChild(typingIndicator); // Remove typing dots
            addMessage("Error connecting to chatbot.", false);
        }
    }

    sendBtn.addEventListener("click", sendMessage);

    // Listen for Enter key to send message
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent line break in input field
            sendMessage();
        }
    });

    // Smooth scroll down
    scrollBtn.addEventListener("click", function () {
        chatBox.scrollTo({
            top: chatBox.scrollHeight,
            behavior: "smooth",
        });
    });

    // Open Trixie webpage
    trixieBtn.addEventListener("click", function () {
        window.open("https://your-trixie-webpage.com", "_blank"); // Update URL
    });
});
