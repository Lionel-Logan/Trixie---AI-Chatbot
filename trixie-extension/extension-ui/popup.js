document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", function () {
        const message = userInput.value.trim();
        if (message) {
            chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
            userInput.value = "";

            // Placeholder for chatbot response (you'll integrate the actual chatbot later)
            setTimeout(() => {
                chatBox.innerHTML += `<p><strong>Bot:</strong> Thinking...</p>`;
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 500);
        }
    });
});



