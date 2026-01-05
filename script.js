// Elements
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');

// Menu toggle
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Smooth scroll with header offset
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        let target = document.querySelector(link.getAttribute('href'));
        if (target) {
            let headerOffset = document.querySelector('.header').offsetHeight;
            let elementPosition = target.offsetTop;
            let offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        // Close menu on mobile
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Close menu on scroll
window.addEventListener('scroll', () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
});



const typed = new Typed('.multiple-text', {
      strings: ['Web Developer', 'Frontend Developer' ,'Backend Developer','UX/UI Designer','Blockchain Developer',],
      typeSpeed: 80,
      backspeed:80,
      backDelay:1200,
      loop:true,
    });