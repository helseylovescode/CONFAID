// Booking Form Event
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your session has been booked. We’ll be in touch shortly!');
});


document.getElementById('logout-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default behavior of the anchor tag
  
    const userConfirmed = confirm('Are you sure you want to log out?');
    if (userConfirmed) {
      // Redirect to the logout route if the user confirms
      window.location.href = '/logout';
    } else {
      // Do nothing if the user cancels
      console.log('User chose to stay on the page.');
    }
  });

  //<!-- JavaScript for Timer -->
      const steps = ["Inhale for 4 seconds", "Hold for 4 seconds", "Exhale for 4 seconds"];
      let stepIndex = 0;
      let countdownInterval;

      function startTimer() {
          let time = 4; // Start at 4 seconds
          document.getElementById("timer-instruction").textContent = steps[stepIndex];
          document.getElementById("countdown").textContent = time;

          countdownInterval = setInterval(() => {
              time--;
              document.getElementById("countdown").textContent = time;

              if (time <= 0) {
                  stepIndex = (stepIndex + 1) % steps.length; // Cycle through steps
                  time = 4; // Reset to 4 seconds for the next step
                  document.getElementById("timer-instruction").textContent = steps[stepIndex];
              }
          }, 1000);
      }
  
      function logMindfulnessSession() {
        fetch('/track-mindfulness', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ time_practiced: 12 }) // Example: 12 seconds
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error('Error:', err));
    }
    
    // Call logMindfulnessSession() after a mindfulness session is completed
    
  
  
  
