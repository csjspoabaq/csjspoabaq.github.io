// assets/js/view-counter.js
document.addEventListener("DOMContentLoaded", async () => {
    // Get current month (from a meta tag set by Jekyll)
    const currentMonth = document.querySelector('meta[name="current-month"]').content;
    const storageKey = `viewed_${currentMonth}`;

    // Skip if user already counted this month
    if (localStorage.getItem(storageKey)) return;

    try {
        // Send request to serverless function to trigger GitHub Action
        await fetch("/.netlify/functions/increment-view", { method: "POST" });
        // Mark user as counted
        localStorage.setItem(storageKey, "true");
    } catch (error) {
        console.error("Failed to increment view count:", error);
    }
});