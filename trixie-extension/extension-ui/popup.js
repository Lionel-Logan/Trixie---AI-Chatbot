document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", async function () {
        const message = userInput.value.trim();
        if (!message) return;

        chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
        userInput.value = "";

        // Send message to chatbot
        try {
            const response = await fetch("http://localhost:5000/chatbot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
            });

            const data = await response.json();
            chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.response}</p>`;
        } catch (error) {
            chatBox.innerHTML += `<p><strong>Bot:</strong> Error connecting to chatbot.</p>`;
        }

        chatBox.scrollTop = chatBox.scrollHeight;
    });
});
