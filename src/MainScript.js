// Scroll to section function
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Handle form submission
const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('formResponse');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        responseMessage.textContent = 'Please fill in all fields.';
        responseMessage.style.color = 'red';
        return;
    }
    function toggleMenu() {
        const nav = document.getElementById('navLinks');
        nav.classList.toggle('show');
    }

    // Simulate form submission
    responseMessage.textContent = `Thank you, ${name}! We'll get back to you soon.`;
    responseMessage.style.color = 'green';

    // Clear form
    form.reset();
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.85)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.6)';
    }
});

