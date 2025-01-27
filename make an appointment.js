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





(function(){
    emailjs.init("X0ULvxe3C1VOQP2hK");
})();

const form = document.getElementById('appointment-form');
const statusMessage = document.getElementById('status-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    statusMessage.textContent = '';

    const formData = new FormData(form);
    const templateParams = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        gender: formData.get('gender'),
        preferred_date: formData.get('preferred_date'),
        preferred_time: formData.get('preferred_time'),
        address: formData.get('address'),
        message: formData.get('message') || 'No additional message'
    };

    emailjs.send('service_ez89z3g', 'template_2utkvcc', templateParams)
        .then(function(response) {
            statusMessage.textContent = 'Appointment request sent successfully!';
            statusMessage.style.color = 'green';
            form.reset();
        }, function(error) {
            statusMessage.textContent = 'Failed to send appointment request. Please try again.';
            statusMessage.style.color = 'red';
            console.error('EmailJS error:', error);
        });
});