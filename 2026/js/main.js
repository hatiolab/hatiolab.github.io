document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Sticky Header Blur Effect
    const header = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.style.background = 'rgba(10, 10, 15, 0.8)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.03)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
        }

        lastScroll = currentScroll;
    });

    // Hero Parallax Effect
    const hero = document.querySelector('.hero');
    const heroVisual = document.querySelector('.hero-visual');

    if (hero && heroVisual) {
        hero.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;

            heroVisual.style.transform = `translateY(-50%) translate(${x}px, ${y}px)`;
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Use Case Tab Switcher
window.switchTab = function (tabId) {
    // Remove active class from all tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Remove active class from all content
    document.querySelectorAll('.use-case-content').forEach(content => {
        content.classList.remove('active');
    });

    // Add active class to clicked tab
    event.currentTarget.classList.add('active');

    // Add active class to target content
    document.getElementById(tabId).classList.add('active');
}

// Booking
// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    initImpactCards();
    initVisualizerSlideshow();
});

function initVisualizerSlideshow() {
    const slides = document.querySelectorAll('.visualizer-slide');
    if (slides.length === 0) return;

    let currentIndex = 0;

    // Initial 3s delay before first image appears
    setTimeout(() => {
        // Show first image
        slides[currentIndex].classList.add('active');

        // Start rotation interval
        setInterval(() => {
            // Remove active from current
            slides[currentIndex].classList.remove('active');

            // Move to next
            currentIndex = (currentIndex + 1) % slides.length;

            // Add active to next
            slides[currentIndex].classList.add('active');
        }, 3000);
    }, 3000);
}

// Impact Cards Interaction & Particles
function initImpactCards() {
    const cards = document.querySelectorAll('.impact-card');
    const particleSystems = {};

    cards.forEach(card => {
        // Interaction
        card.addEventListener('mouseenter', () => {
            // Only activate if not already active to avoid jitter
            if (!card.classList.contains('active')) {
                setActiveCard(card);
            }
        });

        // Also allow click for mobile
        card.addEventListener('click', () => {
            if (!card.classList.contains('active')) {
                setActiveCard(card);
            }
        });

        // Init Particles
        const type = card.dataset.type;
        const canvas = card.querySelector('canvas');
        if (canvas) {
            particleSystems[type] = new ParticleSystem(canvas, type);
        }
    });

    function setActiveCard(activeCard) {
        cards.forEach(c => c.classList.remove('active'));
        activeCard.classList.add('active');
    }
}

// Particle System Class
// Particle System Class
class ParticleSystem {
    constructor(canvas, type) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.type = type;
        this.particles = [];
        this.width = canvas.parentElement.offsetWidth;
        this.height = canvas.parentElement.offsetHeight;
        this.animationId = null;
        this.time = 0; // For wave animation

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.createParticles();
        this.animate();
    }

    resize() {
        this.width = this.canvas.parentElement.offsetWidth;
        this.height = this.canvas.parentElement.offsetHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        // Re-create particles on resize to maintain density
        this.particles = [];
        this.createParticles();
    }

    createParticles() {
        let count = 50;
        if (this.type === 'factory') count = 40; // Fewer nodes for cleaner network
        if (this.type === 'logistics') count = 20; // Streamlines
        if (this.type === 'fnb') count = 5; // Few smooth waves

        for (let i = 0; i < count; i++) {
            this.particles.push(new Particle(this.width, this.height, this.type, i));
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.time += 0.01;

        if (this.type === 'factory') {
            // Render Network Graph
            this.renderNetwork();
        } else if (this.type === 'logistics') {
            // Render Streamlines
            this.renderStreamlines();
        } else if (this.type === 'fnb') {
            // Render Sine Waves
            this.renderWaves();
        }

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    renderNetwork() {
        // Update and draw particles first
        this.particles.forEach(p => {
            p.update();
            p.draw(this.ctx);
        });

        // Draw connections
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 120;

                if (distance < maxDist) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(99, 102, 241, ${1 - distance / maxDist})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }

    renderStreamlines() {
        this.particles.forEach(p => {
            p.update();
            // Draw horizontal trail
            this.ctx.beginPath();
            const gradient = this.ctx.createLinearGradient(p.x - p.length, p.y, p.x, p.y);
            gradient.addColorStop(0, 'rgba(16, 239, 238, 0)');
            gradient.addColorStop(1, 'rgba(16, 239, 238, 0.8)');

            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = p.size;
            this.ctx.moveTo(p.x - p.length, p.y);
            this.ctx.lineTo(p.x, p.y);
            this.ctx.stroke();
        });
    }

    renderWaves() {
        this.particles.forEach((p, index) => {
            this.ctx.beginPath();
            this.ctx.strokeStyle = `rgba(34, 197, 94, ${0.3 + (index * 0.1)})`; // Varying opacity
            this.ctx.lineWidth = 2;

            // Draw sine wave across the width
            for (let x = 0; x <= this.width; x += 10) {
                // y = A * sin(kx + wt) + vertical_offset
                // A = p.amplitude
                // k = p.frequency
                // wt = this.time * p.speed
                const y = p.y + p.amplitude * Math.sin(0.01 * x * p.frequency + this.time * p.speed);

                if (x === 0) this.ctx.moveTo(x, y);
                else this.ctx.lineTo(x, y);
            }
            this.ctx.stroke();
        });
    }
}

class Particle {
    constructor(w, h, type, index) {
        this.w = w;
        this.h = h;
        this.type = type;
        this.index = index;
        this.reset();
    }

    reset() {
        // Shared properties
        this.x = Math.random() * this.w;
        this.y = Math.random() * this.h;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;

        // Type specific
        if (this.type === 'factory') {
            this.color = 'rgba(99, 102, 241, 0.8)';
        }
        else if (this.type === 'logistics') {
            this.x = Math.random() * this.w; // Start anywhere
            this.vx = (Math.random() * 5 + 5) * 0.5; // Fast horizontal (Reduced by 50%)
            this.vy = 0;
            this.length = Math.random() * 100 + 50; // Streamline length
            this.size = Math.random() * 2 + 1;
        }
        else if (this.type === 'fnb') {
            this.y = this.h / 2 + (this.index - 2.5) * 40; // Distribute vertically centered
            this.amplitude = Math.random() * 30 + 20;
            this.frequency = Math.random() * 1 + 0.5;
            this.speed = Math.random() * 2 + 1;
        }
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.type === 'factory') {
            // Bounce off edges
            if (this.x < 0 || this.x > this.w) this.vx *= -1;
            if (this.y < 0 || this.y > this.h) this.vy *= -1;
        }
        else if (this.type === 'logistics') {
            // Wrap around
            if (this.x - this.length > this.w) {
                this.x = 0;
                this.y = Math.random() * this.h;
            }
        }
        // F&B waves don't update individual x/y in the same way, controlled by render loop
    }

    draw(ctx) {
        if (this.type === 'factory') {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        // Other types draw themselves in the system renderer
    }
}

// Booking Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('bookingModal');
    const openBtns = document.querySelectorAll('a[href="#contact"]'); // Hijack contact buttons for demo
    const closeBtns = document.querySelectorAll('.close-modal');
    const step1 = document.getElementById('bookingStep1');
    const step2 = document.getElementById('bookingStep2');
    const success = document.getElementById('bookingSuccess');
    const nextBtn = document.getElementById('goToStep2');
    const backBtn = document.getElementById('backToStep1');
    const form = document.getElementById('bookingForm');

    let selectedDate = null;
    let selectedTime = null;

    // Open Modal
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
            renderCalendar();
        });
    });

    // Close Modal
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'none';
            resetModal();
        });
    });

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            resetModal();
        }
    });

    // Calendar Logic
    function renderCalendar() {
        const datesContainer = document.getElementById('calendarDates');
        datesContainer.innerHTML = '';

        // Mock calendar for October 2026
        const daysInMonth = 31;
        const startDay = 4; // Thursday

        // Empty slots
        for (let i = 0; i < startDay; i++) {
            const empty = document.createElement('div');
            datesContainer.appendChild(empty);
        }

        // Days
        for (let i = 1; i <= daysInMonth; i++) {
            const btn = document.createElement('button');
            btn.className = 'date-btn';
            btn.textContent = i;

            // Disable weekends
            const dayOfWeek = (startDay + i - 1) % 7;
            if (dayOfWeek === 0 || dayOfWeek === 6) {
                btn.disabled = true;
            } else {
                btn.addEventListener('click', () => selectDate(i, btn));
            }

            datesContainer.appendChild(btn);
        }
    }

    function selectDate(day, btn) {
        document.querySelectorAll('.date-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedDate = `October ${day}, 2026`;
        checkSelection();
    }

    // Time Slot Logic
    document.querySelectorAll('.slot-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedTime = btn.textContent;
            checkSelection();
        });
    });

    function checkSelection() {
        if (selectedDate && selectedTime) {
            nextBtn.disabled = false;
        }
    }

    // Navigation
    nextBtn.addEventListener('click', () => {
        step1.style.display = 'none';
        step2.style.display = 'block';
        document.getElementById('summaryDate').textContent = selectedDate;
        document.getElementById('summaryTime').textContent = selectedTime;
    });

    backBtn.addEventListener('click', () => {
        step2.style.display = 'none';
        step1.style.display = 'block';
    });

    // Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate API call
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Booking...';
        submitBtn.disabled = true;

        setTimeout(() => {
            step2.style.display = 'none';
            success.style.display = 'block';
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });

    function resetModal() {
        step1.style.display = 'block';
        step2.style.display = 'none';
        success.style.display = 'none';
        selectedDate = null;
        selectedTime = null;
        nextBtn.disabled = true;
        form.reset();
        document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
    }
});

// Language Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const options = langToggle.querySelectorAll('.lang-option');
            options.forEach(opt => opt.classList.toggle('active'));

            // Log current language (Mock implementation)
            const activeLang = langToggle.querySelector('.lang-option.active').dataset.lang;
            console.log(`Language switched to: ${activeLang}`);

            // Here you would implement actual translation logic
            // e.g., switch content based on activeLang
        });
    }
});

// Hero Video Playback Speed
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('heroVideo');
    if (video) {
        video.playbackRate = 0.7;
    }
});
