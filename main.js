import './style.css'
const words = document.querySelectorAll('.rotator > span');
let currentWordIndex = 0;

function switchWords() {
  // Hide all words
  words.forEach(word => {
    word.style.display = 'none';
  });
  // Show the current word
  words[currentWordIndex].style.display = 'inline';
  // Move to the next word
  currentWordIndex++;
  if (currentWordIndex >= words.length) {
    currentWordIndex = 0; // Reset index if it exceeds the number of words
  }
  // Schedule the next word switch after 2 seconds
  setTimeout(switchWords, 1000);
}
// Start the word switching process
switchWords();
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
  // Array containing text strings to be displayed
  const texts = [
      "Creative Developer - Problem Solver - Empathic Thinker - UI/UX Designer - Creative Developer - Problem Solver - Empathic Thinker - UI/UX Designer - ",
      "Creative Developer - Problem Solver - Empathic Thinker - UI/UX Designer - Creative Developer - Problem Solver - Empathic Thinker - UI/UX Designer - "
  ];

  // Iterate over each text string in the array
  texts.forEach((text, index) => {
      // Get the corresponding HTML element by ID
      const textElement = document.getElementById(`text${index + 1}`);
      // Split the text into individual characters and iterate over them
      text.split('').forEach(char => {
          // Create a span element for each character
          const span = document.createElement('span');
          // Set the character as the text content of the span
          span.textContent = char;
          // Append the span to the text element
          textElement.appendChild(span);
      });
  });

  // Select all span elements inside elements with the class 'text-content'
  const textSpans = document.querySelectorAll('.text-content span');
  // Select the element with the class 'circle'
  const circle = document.querySelector('.circle');

  // Function to check the intersection of text spans with the circle
  function checkIntersection() {
      // Get the bounding rectangle of the circle
      const circleRect = circle.getBoundingClientRect();
      // Calculate the center coordinates and radius of the circle
      const circleCenterX = circleRect.left + circleRect.width / 2;
      const circleCenterY = circleRect.top + circleRect.height / 2;
      const circleRadius = circleRect.width / 2;

      // Iterate over each text span
      textSpans.forEach(span => {
          // Get the bounding rectangle of the span
          const spanRect = span.getBoundingClientRect();
          // Calculate the center coordinates of the span
          const spanCenterX = spanRect.left + spanRect.width / 2;
          const spanCenterY = spanRect.top + spanRect.height / 2;

          // Calculate the distance between the center of the circle and the center of the span
          const distanceX = Math.abs(circleCenterX - spanCenterX);
          const distanceY = Math.abs(circleCenterY - spanCenterY);

          // Check if the span is within the circle's radius
          const isIntersecting = distanceX < circleRadius && distanceY < circleRadius;

          // Change the color of the span based on intersection status
          span.style.color = isIntersecting ? '#FBFAEA' : '#383838';
      });

      // Request the next animation frame to continue checking intersections
      requestAnimationFrame(checkIntersection);
  }

  // Start checking intersections
  checkIntersection();
});
