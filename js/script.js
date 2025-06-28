const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".testimonial-slide");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Optional: Auto Slide
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

const mapWrapper = document.querySelector(".map-wrapper");
const icons = document.querySelectorAll(".location-icon");

function getMapBounds() {
  return {
    width: mapWrapper.offsetWidth,
    height: mapWrapper.offsetHeight,
  };
}

function randomPosition(bounds) {
  return {
    x: Math.random() * (bounds.width - 30), // adjust 30 for icon size
    y: Math.random() * (bounds.height - 30),
  };
}

function moveIconRandomly(icon) {
  const bounds = getMapBounds();
  const pos = randomPosition(bounds);
  const duration = 5 + Math.random() * 5; // between 5s and 10s

  icon.style.transition = `all ${duration}s linear`;
  icon.style.left = `${pos.x}px`;
  icon.style.top = `${pos.y}px`;

  // Keep moving forever
  setTimeout(() => moveIconRandomly(icon), duration * 1000);
}

// Initialize all icons
icons.forEach((icon) => {
  const bounds = getMapBounds();
  const startPos = randomPosition(bounds);
  icon.style.left = `${startPos.x}px`;
  icon.style.top = `${startPos.y}px`;

  // Start continuous movement
  moveIconRandomly(icon);
});
