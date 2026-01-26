// ==================== SMOOTH SCROLLING & ACTIVE NAV LINK ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                document.getElementById('navToggle').classList.remove('active');
            }
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== MOBILE MENU TOGGLE ==================== //
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== CONTACT FORM HANDLING ==================== //
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        showAlert('Mohon isi semua field', 'error');
        return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showAlert('Email tidak valid', 'error');
        return;
    }
    
    // Create mailto link (in real app, you'd use a backend service)
    const subject = 'Portfolio Contact';
    const body = `Nama: ${name}%0AEmail: ${email}%0A%0APesan:%0A${message}`;
    const mailtoLink = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
    
    // Show success message
    showAlert('Pesan berhasil dikirim! Terima kasih telah menghubungi saya.', 'success');
    
    // Reset form
    contactForm.reset();
});

// Alert function
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
    `;
    alertDiv.textContent = message;
    
    document.body.appendChild(alertDiv);
    
    // Remove alert after 4 seconds
    setTimeout(() => {
        alertDiv.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => alertDiv.remove(), 300);
    }, 4000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ==================== SKILLS TAG ANIMATION ==================== //
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach((tag, index) => {
    tag.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s both`;
});

// Add animation keyframe
const skillStyle = document.createElement('style');
skillStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(skillStyle);

// ==================== SCROLL TO TOP BUTTON (OPTIONAL) ==================== //
// This can be added later if needed

// ==================== PAGE LOAD ANIMATION ==================== //
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ==================== KEYBOARD NAVIGATION ==================== //
document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ==================== PARALLAX EFFECT (Optional Enhancement) ==================== //
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const scrollPosition = window.scrollY;
        heroSection.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// ==================== PERFORMANCE: LAZY LOAD IMAGES (Optional) ==================== //
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

console.log('Portfolio website loaded successfully!');
