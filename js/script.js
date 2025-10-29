// === JAVASCRIPT CODE ===

// Preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
});

// Typewriter Effect
const typewriterElement = document.getElementById('typewriter');
const text = "CAPTURANDO HISTORIAS A TRAVÉS DEL LENTE.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typewriterElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Start typewriter after page loads
window.addEventListener('load', typeWriter);

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// WhatsApp Functionality
const whatsappFloat = document.getElementById('whatsappFloat');

whatsappFloat.addEventListener('click', function() {
    const phoneNumber = '1173619142';
    const defaultMessage = 'Hola, vengo de tu landing page Cronicas Visuales y me gustaria contratar tu servicio de Fiverr por $5';
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
});

// Gallery Data
const galleryData = [
    {
        id: 1,
        src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%231a1a2e"/><circle cx="200" cy="150" r="80" fill="%238A2BE2"/><text x="200" y="160" text-anchor="middle" fill="white" font-family="Arial" font-size="24">Retrato 1</text></svg>',
        title: 'Retrato en el estudio',
        category: 'retrato',
        description: 'Sesión de retrato con iluminación natural',
        exif: 'Cámara: Canon EOS R5 | Lente: 50mm f/1.8 | ISO: 200'
    },
    {
        id: 2,
        src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%2316213e"/><polygon points="200,70 250,200 150,200" fill="%236ECBF5"/><text x="200" y="160" text-anchor="middle" fill="white" font-family="Arial" font-size="24">Naturaleza 1</text></svg>',
        title: 'Atardecer en la montaña',
        category: 'naturaleza',
        description: 'Paisaje montañoso al atardecer',
        exif: 'Cámara: Sony A7III | Lente: 24-70mm f/2.8 | ISO: 100'
    },
    {
        id: 3,
        src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%230f3460"/><rect x="100" y="100" width="200" height="100" fill="%23FF6B6B"/><text x="200" y="160" text-anchor="middle" fill="white" font-family="Arial" font-size="24">Urbano 1</text></svg>',
        title: 'Arquitectura urbana',
        category: 'urbano',
        description: 'Edificios modernos en el centro de la ciudad',
        exif: 'Cámara: Nikon Z6 | Lente: 16-35mm f/4 | ISO: 400'
    },
    {
        id: 4,
        src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%231a1a2e"/><circle cx="150" cy="150" r="60" fill="%238A2BE2"/><circle cx="250" cy="150" r="40" fill="%236ECBF5"/><text x="200" y="260" text-anchor="middle" fill="white" font-family="Arial" font-size="24">Producto 1</text></svg>',
        title: 'Productos de belleza',
        category: 'producto',
        description: 'Fotografía comercial para línea de cosméticos',
        exif: 'Cámara: Canon EOS R6 | Lente: 100mm f/2.8 | ISO: 100'
    },
    {
        id: 5,
        src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23162213e"/><ellipse cx="200" cy="150" rx="100" ry="60" fill="%236ECBF5"/><text x="200" y="160" text-anchor="middle" fill="white" font-family="Arial" font-size="24">Retrato 2</text></svg>',
        title: 'Retrato en exteriores',
        category: 'retrato',
        description: 'Sesión al aire libre con luz natural',
        exif: 'Cámara: Sony A7III | Lente: 85mm f/1.4 | ISO: 200'
    },
    {
        id: 6,
        src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%230f3460"/><polygon points="100,150 200,80 300,150 200,220" fill="%23FF6B6B"/><text x="200" y="160" text-anchor="middle" fill="white" font-family="Arial" font-size="24">Naturaleza 2</text></svg>',
        title: 'Bosque otoñal',
        category: 'naturaleza',
        description: 'Sendero en el bosque durante el otoño',
        exif: 'Cámara: Nikon Z6 | Lente: 70-200mm f/2.8 | ISO: 400'
    },
    {
        id: 7,
        src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%231a1a2e"/><rect x="120" y="80" width="160" height="140" fill="%238A2BE2"/><text x="200" y="260" text-anchor="middle" fill="white" font-family="Arial" font-size="24">Urbano 2</text></svg>',
        title: 'Calles de la ciudad',
        category: 'urbano',
        description: 'Vida urbana y arquitectura histórica',
        exif: 'Cámara: Canon EOS R5 | Lente: 35mm f/1.8 | ISO: 800'
    },
    {
        id: 8,
        src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23162213e"/><circle cx="200" cy="150" r="70" fill="%236ECBF5"/><text x="200" y="160" text-anchor="middle" fill="white" font-family="Arial" font-size="24">Producto 2</text></svg>',
        title: 'Tecnología y gadgets',
        category: 'producto',
        description: 'Fotografía de producto para marca tecnológica',
        exif: 'Cámara: Sony A7III | Lente: 90mm f/2.8 | ISO: 100'
    }
];

// Initialize Gallery
function initGallery() {
    const gallery = document.getElementById('gallery');
    
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item ${item.category}`;
        galleryItem.setAttribute('data-category', item.category);
        galleryItem.setAttribute('data-id', item.id);
        
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.title}" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
                <div class="gallery-actions">
                    <button class="action-btn view-btn" aria-label="Ver imagen">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn favorite-btn" aria-label="Añadir a favoritos">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="action-btn share-btn" aria-label="Compartir imagen">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            </div>
        `;
        
        gallery.appendChild(galleryItem);
    });
    
    // Add event listeners to gallery items
    document.querySelectorAll('.view-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => openLightbox(index));
    });
    
    document.querySelectorAll('.favorite-btn').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(index);
        });
    });
    
    document.querySelectorAll('.share-btn').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            shareImage(index);
        });
    });
    
    // Add click event to gallery items for lightbox
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });
}

// Filter Gallery
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            filterGallery(filterValue);
        });
    });
}

function filterGallery(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 100);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Lightbox Functionality
let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const lightboxExif = document.getElementById('lightbox-exif');
    const lightboxCounter = document.getElementById('lightbox-counter');
    
    const item = galleryData[index];
    
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.description;
    lightboxExif.textContent = item.exif;
    lightboxCounter.textContent = `${index + 1} / ${galleryData.length}`;
    
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
}

function navigateLightbox(direction) {
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % galleryData.length;
    } else {
        currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
    }
    
    openLightbox(currentImageIndex);
}

// Initialize Lightbox Events
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox('prev'));
    lightboxNext.addEventListener('click', () => navigateLightbox('next'));
    
    // Close lightbox when clicking on the backdrop
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                navigateLightbox('prev');
                break;
            case 'ArrowRight':
                navigateLightbox('next');
                break;
        }
    });
}

// Favorites Functionality
function toggleFavorite(index) {
    const favoriteBtn = document.querySelectorAll('.favorite-btn')[index];
    const itemId = galleryData[index].id;
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (favorites.includes(itemId)) {
        favorites = favorites.filter(id => id !== itemId);
        favoriteBtn.classList.remove('active');
        favoriteBtn.innerHTML = '<i class="far fa-heart"></i>';
        showToast('Eliminado de favoritos', 'success');
    } else {
        favorites.push(itemId);
        favoriteBtn.classList.add('active');
        favoriteBtn.innerHTML = '<i class="fas fa-heart"></i>';
        showToast('Añadido a favoritos', 'success');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Share Functionality
function shareImage(index) {
    const item = galleryData[index];
    const shareData = {
        title: item.title,
        text: item.description,
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => showToast('Imagen compartida', 'success'))
            .catch(() => showToast('Error al compartir', 'error'));
    } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(window.location.href)
            .then(() => showToast('Enlace copiado al portapapeles', 'success'))
            .catch(() => showToast('Error al copiar enlace', 'error'));
    }
}

// Testimonials Slider
function initTestimonials() {
    const testimonialsContainer = document.getElementById('testimonials-container');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    let currentTestimonial = 0;
    
    function goToTestimonial(index) {
        testimonialsContainer.style.transform = `translateX(-${index * 100}%)`;
        
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        testimonialDots[index].classList.add('active');
        
        currentTestimonial = index;
    }
    
    testimonialDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            goToTestimonial(index);
        });
    });
    
    // Auto-advance testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialDots.length;
        goToTestimonial(currentTestimonial);
    }, 5000);
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showToast('Por favor, completa todos los campos', 'error');
            return;
        }
        
        // Save to localStorage (simulating form submission)
        const formData = {
            name,
            email,
            message,
            timestamp: new Date().toISOString()
        };
        
        let submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
        submissions.push(formData);
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
        
        // Show success message
        showToast('Mensaje enviado correctamente', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// Booking Modal
function initBookingModal() {
    const bookingButtons = document.querySelectorAll('[data-service]');
    const bookingModal = document.getElementById('bookingModal');
    const bookingForm = document.getElementById('bookingForm');
    const bookingService = document.getElementById('booking-service');
    const modalClose = document.querySelector('.modal-close');
    
    bookingButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            bookingService.value = service;
            
            bookingModal.classList.add('active');
            bookingModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        });
    });
    
    modalClose.addEventListener('click', closeBookingModal);
    
    bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            closeBookingModal();
        }
    });
    
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('booking-name').value;
        const email = document.getElementById('booking-email').value;
        const phone = document.getElementById('booking-phone').value;
        const service = document.getElementById('booking-service').value;
        const date = document.getElementById('booking-date').value;
        const message = document.getElementById('booking-message').value;
        
        if (!name || !email || !phone || !date) {
            showToast('Por favor, completa todos los campos obligatorios', 'error');
            return;
        }
        
        // Save booking to localStorage
        const bookingData = {
            name,
            email,
            phone,
            service,
            date,
            message,
            timestamp: new Date().toISOString()
        };
        
        let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings.push(bookingData);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        
        showToast('Sesión reservada correctamente', 'success');
        closeBookingModal();
        bookingForm.reset();
    });
}

function closeBookingModal() {
    const bookingModal = document.getElementById('bookingModal');
    bookingModal.classList.remove('active');
    bookingModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
}

// Toast Notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    toast.className = 'toast';
    toast.classList.add(type, 'active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// Intersection Observer for Animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initGallery();
    initFilters();
    initLightbox();
    initTestimonials();
    initContactForm();
    initBookingModal();
    initIntersectionObserver();
    
    // Check for favorites and update UI
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        const itemId = galleryData[index].id;
        if (favorites.includes(itemId)) {
            const favoriteBtn = item.querySelector('.favorite-btn');
            favoriteBtn.classList.add('active');
            favoriteBtn.innerHTML = '<i class="fas fa-heart"></i>';
        }
    });
});