// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Booking form submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const tour = document.getElementById('tour').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const people = document.getElementById('people').value;

  if (tour && name && email && date && people) {
    alert(`Thank you, ${name}! Your booking for the ${tour} tour on ${date} for ${people} people has been received. We will contact you at ${email}.`);
    this.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for contacting Miles & Memories!");
});
// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Change image every 4 seconds
setInterval(nextSlide, 4000);

// Initialize first slide
showSlide(currentSlide);
