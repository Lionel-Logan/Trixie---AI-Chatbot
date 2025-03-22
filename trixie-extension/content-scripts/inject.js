console.log("Inject.js running");

// Example: Add a chatbot button on LeetCode
let button = document.createElement("button");
button.innerText = "Chatbot Help";
button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "20px";
button.style.background = "#007bff";
button.style.color = "white";
button.style.border = "none";
button.style.padding = "10px";
button.style.cursor = "pointer";
document.body.appendChild(button);

button.addEventListener("click", function () {
    chrome.runtime.sendMessage({ type: "chatbotHelp" });
});
