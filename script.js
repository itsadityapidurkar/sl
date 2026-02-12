document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            mobileMenuBtn.setAttribute('aria-expanded', isActive);
            const icon = mobileMenuBtn.querySelector('i');
            if (isActive) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Fade In Animation on Scroll using Intersection Observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section, .footer, .card');
    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Glitch Effect Randomizer (Optional subtle effect)
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        setInterval(() => {
            glitchElement.classList.add('glitch-effect');
            setTimeout(() => {
                glitchElement.classList.remove('glitch-effect');
            }, 200);
        }, 3000);
    }

    // Sequential Fade Effect for Rules Page
    const protocolSections = document.querySelectorAll('.protocol-section');
    if (protocolSections.length > 0) {
        const itemsToReveal = document.querySelectorAll('.protocol-header, .protocol-item');

        async function startRevealSequence() {
            for (let i = 0; i < itemsToReveal.length; i++) {
                const item = itemsToReveal[i];
                item.classList.add('revealed');
                await new Promise(resolve => setTimeout(resolve, 200)); // Delay between items
            }
        }

        // Start sequence after a short initial delay
        setTimeout(startRevealSequence, 500);
    }

});
