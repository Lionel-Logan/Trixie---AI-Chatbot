chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Message received in background.js:", request);

    if (request.action === "openTab") {
        chrome.tabs.create({ url: "https://www.youtube.com/" }, (tab) => {
            if (chrome.runtime.lastError) {
                console.error("Error opening tab:", chrome.runtime.lastError);
                sendResponse({ status: "Error opening tab" });
            } else {
                console.log("Tab opened successfully:", tab);
                sendResponse({ status: "Tab opened" });
            }
        });
        return true; // Keep the message channel open for async response
    }
});
