console.log("Content script loaded");

// Extract problem details
function extractProblem() {
    let title = document.querySelector(".mr-2.text-label-1")?.innerText || "Unknown Problem";
    let description = document.querySelector(".content__u3I1.question-content")?.innerText || "No description found.";

    return { title, description };
}

// Send data to background script
chrome.runtime.sendMessage({ type: "problemData", data: extractProblem() });
