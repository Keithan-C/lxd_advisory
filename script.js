// script.js

// Interactive features
document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.innerText = 'Click Me!';
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });
});

// Scroll animations
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const elements = document.querySelectorAll('.animate');
    elements.forEach(function(element) {
        const elementPosition = element.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 150;

        if (elementPosition < triggerPoint) {
            element.classList.add('fade-in');
        } else {
            element.classList.remove('fade-in');
        }
    });
});

// Fade-in CSS class
const style = document.createElement('style');
style.innerHTML = `.fade-in { opacity: 1; transition: opacity 0.5s; }`;
document.head.appendChild(style);
