  // Navbar Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
          navLinks.classList.toggle('show');
        });

        // Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

        // Smooth scroll on nav click
        document.querySelectorAll('.nav-links a').forEach(link => {
          link.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            });
            navLinks.classList.remove('show');
          });
        });

        // Scroll animations
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.4 });

        document.querySelectorAll('.fade-in, .fade-in-up')
          .forEach(el => observer.observe(el));

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
          if (!e.target.closest('.navbar') && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
          }
        });

          // Form submission
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    });

    