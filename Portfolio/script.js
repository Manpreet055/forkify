/**
 * Portfolio Scripts
 * Handles Dark Mode Toggle, Mobile Menu, and Scroll Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------------------
    // Dark Mode Toggle
    // -------------------------------------------------------------------------
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    // Check for saved theme preference or use system preference
    // CHANGED: Use a new key to force a reset for the user
    const savedTheme = localStorage.getItem('portfolio_theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let theme;

    if (savedTheme) {
        theme = savedTheme;
    } else {
        theme = systemPrefersDark ? 'dark' : 'light';
    }

    document.documentElement.setAttribute('data-theme', theme);
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio_theme', newTheme);

        // Update Icon
        themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });


    // -------------------------------------------------------------------------
    // Mobile Menu Toggle
    // -------------------------------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        if (mobileMenuBtn) {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }));

    // -------------------------------------------------------------------------
    // Scroll Animations (Intersection Observer)
    // -------------------------------------------------------------------------
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    // Apply .hidden class to sections and observe them
    const animatedElements = document.querySelectorAll('.section, .hero-content, .project-card, .skills-category, .timeline-item');
    animatedElements.forEach((el) => {
        el.classList.add('hidden');
        observer.observe(el);
    });
});
