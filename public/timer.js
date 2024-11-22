let timerInterval;
let timeRemaining = 300; // 5 minutes in seconds

document.getElementById("start-timer").addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            const minutes = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
            const seconds = (timeRemaining % 60).toString().padStart(2, '0');
            document.getElementById("timer-display").textContent = `${minutes}:${seconds}`;
        } else {
            clearInterval(timerInterval);
            alert("Time's up! Take a deep breath.");

            // Send mindfulness data to backend
            fetch("/track-mindfulness", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ time_practiced: 300 })  // Send the time in seconds (5 minutes)
            })
            .then(response => response.json())
            .then(data => {
                console.log("Mindfulness session tracked:", data);
            })
            .catch(error => {
                console.error("Error tracking mindfulness session:", error);
            });
        }
    }, 1000);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(timerInterval);
    timeRemaining = 300;
    document.getElementById("timer-display").textContent = "05:00";
});
