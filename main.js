const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const autoSlide = true;
const sliderInterval = 6000;
let intervalCounter;

// Auto sliding
intervalCounter = setInterval(nextSlide, sliderInterval);

// Left & Right arrow keys handlers
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextSlide();
    clearInterval(intervalCounter);
    intervalCounter = setInterval(nextSlide, sliderInterval);
  }
  if (e.key === "ArrowLeft") {
    prevSlide();
    clearInterval(intervalCounter);
    intervalCounter = setInterval(nextSlide, sliderInterval);
  }
});

// Buttons Handlers
next.addEventListener("click", () => {
  nextSlide();
  clearInterval(intervalCounter);
  intervalCounter = setInterval(nextSlide, sliderInterval);
});
prev.addEventListener("click", () => {
  prevSlide();
  clearInterval(intervalCounter);
  intervalCounter = setInterval(nextSlide, sliderInterval);
});

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
