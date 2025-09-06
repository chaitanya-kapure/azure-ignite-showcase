// Azure Workshop 2025 - JavaScript Functionality

// Global registration counter
let registrationCount = 347;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeRegistrationCounter();
    initializeScrollEffects();
    updateCurrentYear();
});

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Registration functionality
function registerNow() {
    window.open('https://unstop.com', '_blank');
}

function handleRegister() {
    // Open Unstop registration page
    window.open('https://unstop.com', '_blank');
    
    // Simulate auto-email confirmation
    console.log('Auto-email triggered for Azure Workshop 2025 registration');
    
    // Show success notification
    showNotification('Registration initiated! You will receive a confirmation email shortly.');
}

// Simple notification system
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius);
        box-shadow: var(--shadow-glow);
        z-index: 1000;
        animation: slide-up 0.3s ease-out;
        max-width: 300px;
        font-size: 0.875rem;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slide-up 0.3s ease-out reverse';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Initialize scroll-triggered animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation for session cards
                if (entry.target.hasAttribute('data-session')) {
                    const sessionIndex = parseInt(entry.target.getAttribute('data-session'));
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.transition = 'all 0.7s ease-out';
                    }, sessionIndex * 200);
                }
            }
        });
    }, observerOptions);

    // Observe all elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.session-card, .sponsor-card, .benefit-item, .fade-in');
    animatedElements.forEach(el => observer.observe(el));
}

// Registration counter simulation
function initializeRegistrationCounter() {
    const counterElement = document.getElementById('registrationCount');
    if (!counterElement) return;

    // Update counter every 30 seconds
    setInterval(() => {
        registrationCount += Math.floor(Math.random() * 3);
        counterElement.textContent = registrationCount;
        
        // Add a subtle animation
        counterElement.style.animation = 'pulse-glow 0.5s ease-in-out';
        setTimeout(() => {
            counterElement.style.animation = '';
        }, 500);
    }, 30000);
}

// Scroll effects for hero section
function initializeScrollEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        
        if (heroSection) {
            // Parallax effect on hero background
            const heroBackground = heroSection.querySelector('.hero-background');
            if (heroBackground) {
                heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
            
            // Fade out hero content on scroll
            const heroContent = heroSection.querySelector('.hero-content');
            if (heroContent) {
                const opacity = Math.max(0, 1 - scrolled / window.innerHeight);
                heroContent.style.opacity = opacity;
            }
        }
    });
}

// Update current year in footer
function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        scrollToSection(targetId);
    }
});

// Enhanced hover effects for sponsor cards
function initializeSponsorEffects() {
    const sponsorCards = document.querySelectorAll('.sponsor-card');
    
    sponsorCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add glow effect
            this.style.boxShadow = 'var(--shadow-azure)';
            
            // Scale logo
            const logo = this.querySelector('.sponsor-logo');
            if (logo) {
                logo.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            // Remove glow effect
            this.style.boxShadow = 'var(--shadow-card)';
            
            // Reset logo scale
            const logo = this.querySelector('.sponsor-logo');
            if (logo) {
                logo.style.transform = 'scale(1)';
            }
        });
    });
}

// Initialize sponsor effects after DOM load
document.addEventListener('DOMContentLoaded', initializeSponsorEffects);

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to close any modals (if implemented later)
    if (e.key === 'Escape') {
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => {
            notification.remove();
        });
    }
    
    // Enter key for button activation
    if (e.key === 'Enter' && e.target.tagName === 'BUTTON') {
        e.target.click();
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(initializeScrollEffects, 10));

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Create a placeholder if image fails to load
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: ${this.offsetWidth || 48}px;
                height: ${this.offsetHeight || 48}px;
                background: var(--muted);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--muted-foreground);
                font-size: 0.75rem;
            `;
            placeholder.textContent = 'Image';
            
            this.parentNode.replaceChild(placeholder, this);
        });
    });
});

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    console.log('Analytics Event:', eventName, eventData);
    // In a real implementation, this would send data to analytics service
}

// Track user interactions
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('cta-button')) {
        trackEvent('cta_click', { button: 'hero_register' });
    }
    
    if (e.target.classList.contains('registration-button')) {
        trackEvent('registration_click', { source: 'registration_section' });
    }
    
    if (e.target.classList.contains('sponsor-cta-button')) {
        trackEvent('sponsor_inquiry', { source: 'sponsor_section' });
    }
});

// Mobile menu functionality (if needed later)
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('open');
    }
}

// Accessibility improvements
function enhanceAccessibility() {
    // Add skip link functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content identifier
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.id = 'main-content';
        heroSection.setAttribute('tabindex', '-1');
    }
}

// Initialize accessibility enhancements
document.addEventListener('DOMContentLoaded', enhanceAccessibility);

// Export functions for potential external use
window.AzureWorkshop = {
    scrollToSection,
    registerNow,
    handleRegister,
    showNotification,
    trackEvent
};