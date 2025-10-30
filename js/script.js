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
        src: './assets/urbano/puente.avif',
        title: 'Puente iluminado en la ciudad',
        category: 'urbano',
        description: 'Fotografía diurna con la luz del sol reflejando en el agua',
        exif: 'Cámara: Sony A7III | Lente: 90mm f/2.8 | ISO: 100'
    },
    {
        id: 2,
        src: './assets/retrato/chico-3.avif',
        title: 'Retrato masculino con distintos tonos',
        category: 'retrato',
        description: 'Retrato moderno con tonos fríos y calidos',
        exif: 'Cámara: Nikon Z6 | Lente: 16-35mm f/4 | ISO: 400'
    },
    {
        id: 3,
        src: './assets/producto/papas.jpg',
        title: 'Papas fritas en estudio gastronómico',
        category: 'producto',
        description: 'Composición de producto con iluminación lateral',
        exif: 'Cámara: Sony A7III | Lente: 90mm f/2.8 | ISO: 100'
    },
    {
        id: 4,
        src: './assets/naturaleza/sendero.avif',
        title: 'Sendero entre montañas',
        category: 'naturaleza',
        description: 'Camino rodeado de montañas y luz suave',
        exif: 'Cámara: Nikon Z6 | Lente: 70-200mm f/2.8 | ISO: 400'
    },
    {
        id: 5,
        src: './assets/retrato/chica-2.avif',
        title: 'Retrato artístico con neutro',
        category: 'retrato',
        description: 'Retrato femenino con tonos suaves y luz artificial',
        exif: 'Cámara: Sony A7III | Lente: 24-70mm f/2.8 | ISO: 100'
    },
    {
        id: 6,
        src: './assets/producto/iphone.avif',
        title: 'iPhone sobre fondo oscuro',
        category: 'producto',
        description: 'Fotografía de producto con reflejos suaves y composición limpia',
        exif: 'Cámara: Sony A7III | Lente: 90mm f/2.8 | ISO: 100'
    },
    {
        id: 7,
        src: './assets/naturaleza/bosque.jpg',
        title: 'Bosque entre luces y sombras',
        category: 'naturaleza',
        description: 'Paisaje natural con rayos de sol filtrándose entre los árboles',
        exif: 'Cámara: Canon EOS R6 | Lente: 100mm f/2.8 | ISO: 100'
    },
    {
        id: 8,
        src: './assets/urbano/ciudad-noche.avif',
        title: 'Ciudad iluminada',
        category: 'urbano',
        description: 'Vista urbana con contraste entre luces artificiales y cielo claro',
        exif: 'Cámara: Canon EOS R5 | Lente: 35mm f/1.8 | ISO: 800'
    },
    {
        id: 9,
        src: './assets/producto/computadora.jpeg',
        title: 'Computadora en entorno profesional',
        category: 'producto',
        description: 'Fotografía publicitaria de equipo tecnológico en estudio',
        exif: 'Cámara: Sony A7III | Lente: 90mm f/2.8 | ISO: 100'
    },
    {
        id: 10,
        src: './assets/naturaleza/mar.avif',
        title: 'Olas del mar al amanecer',
        category: 'naturaleza',
        description: 'Fotografía marina con tonos calidos y reflejos dorados',
        exif: 'Cámara: Sony A7III | Lente: 85mm f/1.4 | ISO: 200'
    },
    {
        id: 11,
        src: './assets/urbano/gente.jpg',
        title: 'Multitud en movimiento',
        category: 'urbano',
        description: 'Escena callejera que captura la energía de la ciudad',
        exif: 'Cámara: Sony A7III | Lente: 90mm f/2.8 | ISO: 100'
    },
    {
        id: 12,
        src: './assets/retrato/chica-1.avif',
        title: 'Retrato frontal con luz natural',
        category: 'retrato',
        description: 'Expresión serena y composición equilibrada',
        exif: 'Cámara: Canon EOS R5 | Lente: 50mm f/1.8 | ISO: 200'
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