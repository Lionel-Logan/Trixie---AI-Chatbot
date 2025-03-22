chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "userMessage") {
        console.log("User message received:", request.text);

        // Simulate chatbot response
        let botResponse = "Processing... (Chatbot response here)";
        sendResponse({ text: botResponse });
    }
    return true;
});
