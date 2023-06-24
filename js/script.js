const progressValues = [95, 70,89,50,70,50]; // Array of progress values for each circular progress bar
const speed = 30;

const circularProgressList = document.querySelectorAll(".circular-progress");

circularProgressList.forEach((progressBar, index) => {
  const progressValue = progressBar.querySelector(".progress-value");
  let startValue = 0;
  const endValue = progressValues[index];

  const progress = setInterval(() => {
    startValue++;

    progressValue.textContent = `${startValue}%`;
    progressBar.style.background = `conic-gradient(blue ${startValue * 3.6}deg, #ededed 0deg)`;

    if (startValue == endValue) {
      clearInterval(progress);
    }
  }, speed);
});

//----------progress bar -----------------------
// Trigger animation when the page loads or as needed
window.addEventListener('DOMContentLoaded', startAnimations);

function startAnimations() {
  var progressBars = document.querySelectorAll('.progress-bar-inner');

  progressBars.forEach(function(progressBar, index) {
    progressBar.style.animationPlayState = 'running';

    // Set individual widths for each progress bar
    var widths = ['90%', '75%','70%']; // Adjust the widths as needed

    // Pause the animation when it completes
    setTimeout(function() {
      progressBar.style.animationPlayState = 'paused';
      progressBar.style.width = widths[index];
    }, 2000); // Adjust the duration here (in milliseconds) to match your animation duration
  });
}
//-------------slider------------------
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
//-------------------------------------------
// Function to handle button click
function active(button) {
  // Remove the "active" class from any other buttons
  const activeButtons = document.getElementsByClassName('active');
  for (let i = 0; i < activeButtons.length; i++) {
    activeButtons[i].classList.remove('active');
  }
  
  // Add the "active" class to the clicked button
  button.classList.add('active');
}
