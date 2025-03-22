document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const scrollBtn = document.getElementById("scroll-down");

    function addMessage(sender, text, isUser) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.classList.add(isUser ? "user-message" : "bot-message");

        const messageText = document.createElement("p");
        messageText.innerHTML = text;
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

    sendBtn.addEventListener("click", async function () {
        const message = userInput.value.trim();
        if (!message) return;

        addMessage("You", message, true);
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
            addMessage("Bot", data.response, false);
        } catch (error) {
            chatBox.removeChild(typingIndicator); // Remove typing dots
            addMessage("Bot", "Error connecting to chatbot.", false);
        }
    });

    // Smooth scroll down
    scrollBtn.addEventListener("click", function () {
        chatBox.scrollTo({
            top: chatBox.scrollHeight,
            behavior: "smooth",
        });
    });
});
