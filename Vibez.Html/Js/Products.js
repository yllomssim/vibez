// Set the target date and time for the countdown
const targetDate = new Date("2023-09-20T23:59:59").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
   const now = new Date().getTime();
   const timeRemaining = targetDate - now;

   // Calculate days, hours, minutes, and seconds
   const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
   const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

   // Display the countdown timer
   document.getElementById("timer").innerHTML = `
      ${days}D : ${hours}H : ${minutes}M : ${seconds}S
   `;

   // If the countdown is over, display a message and clear the interval
   if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("timer").innerHTML = "Countdown expired!";
   }
}, 1000); // Update every second