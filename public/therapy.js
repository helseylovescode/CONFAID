// Define the emoticons and add event listeners for additional animations
document.addEventListener("DOMContentLoaded", function () {
    const emoticons = document.querySelectorAll(".emoticon");

    emoticons.forEach((emoticon) => {
        emoticon.addEventListener("click", () => {
            emoticon.classList.add("bounce");
            setTimeout(() => {
                emoticon.classList.remove("bounce");
            }, 1000);
        });
    });
});

// Bounce animation class added dynamically
