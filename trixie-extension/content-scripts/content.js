console.log("⚡ Content script loaded");

// Function to extract LeetCode problem title
function getProblemTitle() {
    const titleElement = document.querySelector(".text-title-large a");
    return titleElement ? titleElement.innerText.trim() : null;
}

// Send title to popup.js
function sendProblemTitle() {
    const title = getProblemTitle();
    if (title) {
        console.log("📤 Sending problem title:", title);
        chrome.runtime.sendMessage({ type: "problemTitle", title });
    } else {
        console.log("⚠️ No problem title found");
    }
}

// Run on page load & when DOM changes
sendProblemTitle();
setInterval(sendProblemTitle, 3000); // Check for updates every 3 seconds
