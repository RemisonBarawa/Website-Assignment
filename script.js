// Image Slider Logic
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
}

function changeSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

// Auto-slide every 5 seconds
setInterval(() => changeSlide(1), 5000);

// Form Validation Logic
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    if (!message) {
        document.getElementById('messageError').textContent = 'Message is required';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
    }

    // Success message if valid
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        this.reset();
        setTimeout(() => document.getElementById('successMessage').style.display = 'none', 3000);
    }
});
