

document.addEventListener('scroll', function () {
    const topNavbar = document.querySelector('.top-navbar');
    const mainNavbar = document.querySelector('.main-navbar');
    if (window.scrollY > 50) {
        topNavbar.style.backgroundColor = '#007bff';
        topNavbar.style.color = 'white';
        mainNavbar.style.top = '0';
    } else {
        topNavbar.style.backgroundColor = 'white';
        topNavbar.style.color = 'black';
        mainNavbar.style.top = '40px';
    }
});

// Function to toggle blue background on department sections when clicked
const departments = document.querySelectorAll('.department');

departments.forEach(department => {
  department.addEventListener('click', () => {
    // Remove the active class from all departments
    departments.forEach(d => d.classList.remove('active'));

    // Add the active class to the clicked department
    department.classList.add('active');
  });
});





// JavaScript for Scroll Event
let lastScrollTop = 0;
const banner = document.querySelector('.scroll-banner');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop < lastScrollTop) {
        // Scrolling up, show the banner
        banner.classList.add('show');
    } else {
        // Scrolling down, hide the banner
        banner.classList.remove('show');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});





// Custom Slideshow (General Slide)
let currentIndex = 0;
const slides = document.querySelectorAll('.custom-slide');

// Function to show the current slide and hide the others
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');  // Hide all slides
    if (i === index) {
      slide.classList.add('active');  // Show the current slide
    }
  });
}

// Function to move to the next slide automatically
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Loop to the first slide after the last one
  showSlide(currentIndex);
}

// Auto slide every 4 seconds
setInterval(nextSlide, 4000);

// Show the first slide initially
showSlide(currentIndex);


// Specialist Image Slider
let specialistCurrentIndex = 0;
const specialistImages = document.querySelectorAll('.find-specialist-section .slider-image');
const specialistDots = document.querySelectorAll('.find-specialist-section .dot');

// Function to show the current specialist image and hide the others
function showSpecialistImage(index) {
  specialistImages.forEach((img, i) => {
    img.style.opacity = i === index ? 1 : 0; // Show the current image
  });

  specialistDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index); // Highlight the current dot
  });
}

// Function to move to the next specialist image
function nextSpecialistImage() {
  specialistCurrentIndex = (specialistCurrentIndex + 1) % specialistImages.length; // Loop to the first image after the last one
  showSpecialistImage(specialistCurrentIndex);
}

// Initialize the first image for the specialist section
showSpecialistImage(specialistCurrentIndex);

// Change image every 4 seconds
setInterval(nextSpecialistImage, 4000);
