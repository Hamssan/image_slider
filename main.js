const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const sliderInterval = 9000;
let intervalCounter;

// Auto sliding
intervalCounter = setInterval(nextSlide, sliderInterval);

// Left & Right arrow keys handlers
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowRight":
      nextSlide();
      autoSliding();
      break;
    case "ArrowLeft":
      prevSlide();
      autoSliding();
      break;
  }
});

// Buttons Handlers
next.addEventListener("click", () => {
  nextSlide();
  autoSliding();
});
prev.addEventListener("click", () => {
  prevSlide();
  autoSliding();
});

// Move Forwards Function
function nextSlide() {
  // Get current class
  const current = document.querySelector(".current");

  // Remove current class
  current.classList.remove("current");

  // Check for the next slide
  if (current.nextElementSibling) {
    // Add current class to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current class to start
    slides[0].classList.add("current");
  }
}
// Move Backwards Function
function prevSlide() {
  // Get current class
  const current = document.querySelector(".current");

  // Remove current class
  current.classList.remove("current");

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
}

function autoSliding() {
  clearInterval(intervalCounter);
  intervalCounter = setInterval(nextSlide, sliderInterval);
}
