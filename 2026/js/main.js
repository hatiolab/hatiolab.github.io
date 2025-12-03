/**
 * Hatiolab 2026 - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initNavbar();
    initSmoothScroll();
    initScrollAnimations();
    initMobileMenu();
    initContactForm();
});

/**
 * Navbar scroll effect
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add background on scroll
        if (currentScroll > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.padding = '0.75rem 0';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.8)';
            navbar.style.padding = '1.5rem 0';
        }

        lastScroll = currentScroll;
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const mobileMenu = document.querySelector('.nav-menu');
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
}

/**
 * Scroll animations using Intersection Observer
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animateElements = document.querySelectorAll(
        '.about-card, .solution-card, .product-card, .section-header'
    );

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animation class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Add mobile menu styles
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .nav-menu {
                    position: fixed;
                    top: 70px;
                    left: 0;
                    right: 0;
                    background: rgba(10, 10, 15, 0.98);
                    flex-direction: column;
                    padding: 2rem;
                    gap: 1.5rem;
                    transform: translateY(-100%);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                }

                .nav-menu.active {
                    transform: translateY(0);
                    opacity: 1;
                    visibility: visible;
                    display: flex;
                }

                .menu-toggle.active span:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 5px);
                }

                .menu-toggle.active span:nth-child(2) {
                    opacity: 0;
                }

                .menu-toggle.active span:nth-child(3) {
                    transform: rotate(-45deg) translate(5px, -5px);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Contact form handling
 */
function initContactForm() {
    const form = document.querySelector('.contact-form');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            // Show loading state
            submitBtn.textContent = '전송 중...';
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual API call)
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Success
                submitBtn.textContent = '전송 완료!';
                submitBtn.style.background = 'var(--color-success)';

                // Reset form
                form.reset();

                // Reset button after delay
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);

            } catch (error) {
                // Error handling
                submitBtn.textContent = '오류 발생';
                submitBtn.style.background = 'var(--color-error)';

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    }
}

/**
 * Utility: Throttle function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
