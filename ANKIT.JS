// Navbar ka background change hoga jab scroll karenge
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#1a252f';
        navbar.style.padding = '10px 10%';
    } else {
        navbar.style.background = '#2c3e50';
        navbar.style.padding = '20px 10%';
    }
});

// Simple Console Message for fun
console.log("Ankit's Portfolio Loaded Successfully!");