

        /* ============================================
           MOBILE MENU TOGGLE
        ============================================ */
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        /* ============================================
           NAVBAR SCROLL EFFECT
        ============================================ */
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        /* ============================================
           HERO CAROUSEL
        ============================================ */
        const slides = document.querySelectorAll('.hero-slide');
        let currentSlide = 0;

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        // Auto-advance carousel every 5 seconds
        setInterval(nextSlide, 5000);

        /* ============================================
           LIGHTBOX FUNCTIONALITY
        ============================================ */
        const galleryItems = document.querySelectorAll('.gallery-item');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        const lightboxClose = document.getElementById('lightboxClose');

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.dataset.img;
                lightboxImg.src = imgSrc;
                lightbox.classList.add('active');
            });
        });

        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });

        /* ============================================
           CONTACT FORM SUBMISSION
        ============================================ */
        const contactForm = document.getElementById('contactForm');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email} soon.`);
                contactForm.reset();
            }
        });

        /* ============================================
           SMOOTH SCROLL TO SECTION
        ============================================ */
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
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

        /* ============================================
           SCROLL ANIMATIONS (FADE IN ON SCROLL)
        ============================================ */
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        /* ============================================
           BOOK NOW BUTTON FUNCTIONALITY
        ============================================ */
        const bookButtons = document.querySelectorAll('.book-btn');
        
        bookButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Scroll to contact section
                document.getElementById('contact').scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Optional: Pre-fill form with service info
                const serviceName = btn.parentElement.querySelector('h3').textContent;
                document.getElementById('message').value = `I'm interested in the ${serviceName}. Please provide more details.`;
            });
        });
    