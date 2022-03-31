// Define the targe
const target = '1 jan 2023';

// Select elements from HTML
const daysElement = document.querySelector('#days');
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');

// Create the function
function countdown() {
  // Assign to target the new year date
  const targetDate = new Date(target);
  // Create a const for the current Date
  const currentDate = new Date();

  // Create a diff between our two dates
  const diff = new Date(targetDate - currentDate);
  // Set time
  const totalSeconds = (targetDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  // Reasign value for HTML elements
  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;


  // console.log(days, hours, minutes, seconds);
}

countdown();

setInterval(countdown, 1000)
