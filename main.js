const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
let sliderInterval = 9000;
let intervalCounter;

if (screen.width <= 500) {
  sliderInterval = 5000;
}

// Auto sliding
intervalCounter = setInterval(nextSlide, sliderInterval);

// Keyboard event
document.addEventListener("keydown", (e) => {
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

// Mouse Events
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
