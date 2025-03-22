document.getElementById("send-btn").addEventListener("click", async () => {
    const userInput = document.getElementById("user-input").value;
    const chatOutput = document.getElementById("chat-output");

    if (!userInput.trim()) return;

    // Send request to chatbot API
    const response = await fetch("/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput })
    });

    const data = await response.json();
    chatOutput.innerHTML += `<p><strong>Chatbot:</strong> ${data.response}</p>`;
    document.getElementById("user-input").value = "";
});
