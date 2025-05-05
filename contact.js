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

// Initialize EmailJS
emailjs.init("i3ZSoMnIWI1x_CWAg"); // Replace with your Public Key

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const serviceID = "service_0tkcbbe";
    const templateID = "template_vn7dkip";
    
    // Collect form data with CORRECT parameter names matching your template
    const templateParams = {
        to_name: "Your Name", // Replace with your name or company name that receives emails
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        from_address: document.getElementById("address").value,
        message: document.getElementById("message").value,
        phone: document.getElementById("phone").value // Also including phone although not in the template example
    };
    
    // Send the email
    emailjs.send(serviceID, templateID, templateParams)
        .then(response => {
            alert("Message Sent Successfully!");
            document.getElementById("contact-form").reset(); // Clear the form
        })
        .catch(error => {
            alert("Failed to send message. Please try again later.");
            console.error("EmailJS Error:", error);
        });
});