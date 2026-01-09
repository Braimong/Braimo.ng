 // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Morphic shapes animation
        document.addEventListener('mousemove', function(e) {
            const shapes = document.querySelectorAll('.shape');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            shapes.forEach(shape => {
                const speed = parseFloat(shape.getAttribute('data-speed')) || 5;
                const xOffset = (x - 0.5) * speed;
                const yOffset = (y - 0.5) * speed;
                
                
            });
        });

        // Modal functionality
        const modalTriggers = document.querySelectorAll('.bento-item');
        const modals = document.querySelectorAll('.modal');
        const closeButtons = document.querySelectorAll('.modal-close');
        
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const modalId = trigger.getAttribute('data-modal') + '-modal';
                document.getElementById(modalId).classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                modals.forEach(modal => modal.classList.remove('active'));
                document.body.style.overflow = 'auto';
            });
        });
        
        modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        });

        // Form submission
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            });
        }
        
        // Initialize when page loads
        window.addEventListener('load', function() {
            document.body.classList.add('loaded');
            
            // Animate shapes on load
            const shapes = document.querySelectorAll('.shape');
            shapes.forEach((shape, index) => {
                shape.setAttribute('data-speed', (index + 1) * 2);
                shape.style.transition = 'transform 0.5s ease-out';
            });
            
            // Add scroll animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('bento-item')) {
                            if (entry.target === document.querySelector('.bento-item:nth-child(2)')) {
                                // Shoes - fade in
                                entry.target.classList.add('fade-in');
                            } else {
                                // Others - slide in
                                entry.target.classList.add('animate');
                            }
                        } else {
                            entry.target.classList.add('animate');
                        }
                    }
                });
            }, observerOptions);

            // Observe all elements that need animation
            document.querySelectorAll('.bento-item, .product-card, .footer-logo, .footer-social, .copyright').forEach(el => {
                observer.observe(el);
            });
        });
        
        // Smooth scrolling for anchor links
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