document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Hero Section Dynamic Background ---
    // This is a conceptual placeholder. A more complex animation (e.g., particle effects)
    // would typically use a library like particles.js or require more detailed canvas/WebGL implementation.
    // For now, we'll keep the CSS animation and add a subtle mouse move effect if desired.

    const hero = document.getElementById('hero');
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const { offsetX, offsetY, target } = e;
            const { clientWidth, clientHeight } = target;
            // Calculate movement ratios (0 to 1)
            const xRatio = offsetX / clientWidth;
            const yRatio = offsetY / clientHeight;
            // Apply a subtle parallax effect to a pseudo-element or a dedicated background layer
            // For simplicity, we'll adjust the existing ::before pseudo-element's transform
            // This requires the pseudo-element to be styled appropriately in CSS.
            // Note: Directly manipulating pseudo-elements with JS is tricky.
            // A common approach is to use CSS variables.
            // hero.style.setProperty('--mouse-x', `${xRatio * 10 - 5}px`); // Example: move -5px to 5px
            // hero.style.setProperty('--mouse-y', `${yRatio * 10 - 5}px`);
            // Then in CSS: #hero::before { transform: translate(var(--mouse-x), var(--mouse-y)); }
            // For this example, we'll keep it simpler and acknowledge the current CSS animation handles the primary dynamic background.
        });
    }


    // --- Services Section: Floating Icons ---
    // The primary floating animation is handled by CSS @keyframes.
    // JavaScript can be used for more complex interactions or physics-based movement.
    // For this example, we'll assume the CSS animation is sufficient for "floating".

    // --- Projects Section: Interactive Project Cards ---
    // The hover effects (transform, box-shadow) are handled by CSS :hover.
    // JavaScript could be used for:
    //  - More complex animations on hover (e.g., revealing more details).
    //  - Filtering projects.
    //  - Opening modals for project details.

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Example: Add a class for more complex JS-driven animation if needed
            // card.classList.add('project-card-active');
        });
        card.addEventListener('mouseleave', () => {
            // card.classList.remove('project-card-active');
        });
    });


    // --- General Scroll Animations (Appear on Scroll) ---
    // This is a common feature to make elements fade in or slide in as they enter the viewport.
    const animatedElements = document.querySelectorAll('.service-icon, .project-card, #about .about-text, #about .about-image');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Optional: Unobserve after animation to save resources
                // observer.unobserve(entry.target);
            } else {
                // Optional: Reset if you want the animation to replay if it scrolls out and back in
                // entry.target.style.opacity = '0';
                // entry.target.style.transform = 'translateY(20px)';
            }
        });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    animatedElements.forEach(el => {
        // Initial state for animation
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        scrollObserver.observe(el);
    });

});

// Placeholder for form submission (Contact Section)
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real application, you would send this data to a server
        // or use a service like Formspree or Netlify Forms.
        alert('Message sent! (This is a placeholder)');
        contactForm.reset();
    });
}
