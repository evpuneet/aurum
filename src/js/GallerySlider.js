
document.addEventListener('DOMContentLoaded', function() {
    // Get all slides
    const slides = document.querySelectorAll('.relative.cursor-pointer.overflow-hidden.h-full');
    let currentSlideIndex = 0;
    const slideCount = slides.length;
    const autoplayInterval = 5000; // 5 seconds between slides
    let autoplayTimer;

    // Function to update slide widths
    function updateSlideWidths(activeIndex) {
        slides.forEach((slide, index) => {
            // Apply transition
            slide.style.transition = 'width 0.5s ease-in-out';
            
            if (index === activeIndex) {
                slide.style.width = '80%'; // Active slide
            } else {
                slide.style.width = '10%'; // Inactive slides
            }
        });

        // Update content visibility
        slides.forEach((slide, index) => {
            const mainContent = slide.querySelector('p');
            const title = slide.querySelector('h3');
            
            if (mainContent) {
                mainContent.style.opacity = index === activeIndex ? '1' : '0';
                mainContent.style.transition = 'opacity 0.5s ease-in-out';
            }
            
            if (title) {
                title.style.opacity = '1';
            }
        });
    }

    // Function to go to next slide
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slideCount;
        updateSlideWidths(currentSlideIndex);
    }

    // Function to go to previous slide
    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slideCount) % slideCount;
        updateSlideWidths(currentSlideIndex);
    }

    // Set up click handlers for each slide
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            currentSlideIndex = index;
            updateSlideWidths(currentSlideIndex);
            resetAutoplay();
        });
    });

    // Set up autoplay
    function startAutoplay() {
        autoplayTimer = setInterval(nextSlide, autoplayInterval);
    }

    // Reset autoplay timer
    function resetAutoplay() {
        clearInterval(autoplayTimer);
        startAutoplay();
    }

    // Initialize slider
    updateSlideWidths(currentSlideIndex);
    startAutoplay();

    // Add event listeners for mobile navigation arrows
    const prevButton = document.querySelector('.group svg[viewBox="0 0 18 31"]').parentElement;
    const nextButton = document.querySelector('.group svg[viewBox="0 0 17 31"]').parentElement;

    prevButton.addEventListener('click', () => {
        prevSlide();
        resetAutoplay();
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        resetAutoplay();
    });

    // Pause autoplay on hover
    const sliderContainer = document.querySelector('.flex.flex-col.md\\:flex-row.w-full.h-full.relative');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
        sliderContainer.addEventListener('mouseleave', startAutoplay);
    }
});

