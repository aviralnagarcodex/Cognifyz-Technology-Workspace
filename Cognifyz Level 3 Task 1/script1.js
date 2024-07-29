const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  slides[currentSlide].classList.add("active");

  setTimeout(showSlide, 4000); // Adjust interval between transitions here
}

showSlide();
