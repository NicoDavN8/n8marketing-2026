document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // FAQ Accordion logic
    const faqButtons = document.querySelectorAll('.faq-button');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.icon');

            // Toggle open states
            content.classList.toggle('hidden');
            if (content.classList.contains('hidden')) {
                icon.textContent = '+';
            } else {
                icon.textContent = '-';
            }
        });
    });

    // Expertise Carousel
    const carousel = document.getElementById('expertiseCarousel');
    const prevBtn = document.getElementById('expertisePrev');
    const nextBtn = document.getElementById('expertiseNext');
    const dots = document.querySelectorAll('.carousel-dot');

    if (carousel && prevBtn && nextBtn) {
        const getCardWidth = () => {
            const card = carousel.querySelector('.expertise-card');
            if (!card) return 0;
            const gap = parseFloat(getComputedStyle(carousel).gap) || 24;
            return card.offsetWidth + gap;
        };

        const updateState = () => {
            const cardWidth = getCardWidth();
            if (cardWidth === 0) return;
            const activeIndex = Math.round(carousel.scrollLeft / cardWidth);
            dots.forEach((dot, i) => dot.classList.toggle('active', i === activeIndex));
            prevBtn.disabled = carousel.scrollLeft < 5;
            nextBtn.disabled = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 5;
        };

        prevBtn.addEventListener('click', () => carousel.scrollBy({ left: -getCardWidth(), behavior: 'smooth' }));
        nextBtn.addEventListener('click', () => carousel.scrollBy({ left: getCardWidth(), behavior: 'smooth' }));

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                carousel.scrollTo({ left: i * getCardWidth(), behavior: 'smooth' });
            });
        });

        carousel.addEventListener('scroll', updateState, { passive: true });
        window.addEventListener('resize', updateState);
        updateState();
    }
});
