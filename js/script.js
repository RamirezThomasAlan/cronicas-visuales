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