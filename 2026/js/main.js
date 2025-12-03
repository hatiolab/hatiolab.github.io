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
