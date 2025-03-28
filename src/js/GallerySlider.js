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
            slide.style.transition = 'width 0.5s ease-in-out';
    
            if (index === activeIndex) {
                slide.style.width = '80%'; // Active slide
            } else {
                slide.style.width = '10%'; // Inactive slides
            }
    
            // Update content visibility and styles
            const mainContent = slide.querySelector('p');
            const title = slide.querySelector('h3');
            const wrapperDiv = slide.querySelector('.target-div');

            if (wrapperDiv) {
                wrapperDiv.style.transition = 'flex-direction 0.5s ease-in-out';
                wrapperDiv.style.flexDirection = index === activeIndex ? 'column' : 'row';
            }
            
            if (mainContent) {
                title.style.textAlign = index === activeIndex ? 'left' : 'right';
                mainContent.style.opacity = index === activeIndex ? '1' : '0';
                mainContent.style.visibility = index === activeIndex ? 'visible' : 'hidden';
                mainContent.style.transition = 'opacity 0.5s ease-in-out';
            }
    
            if (title) {
                if (index === activeIndex) {
                    // Reset to original active style
                    title.style.writingMode = "horizontal-tb";
                    title.style.transform = "rotate(0deg)";
                    title.style.opacity = "1";
                    title.style.fontSize = "";
                    title.style.lineHeight = "";
                    title.classList.remove("text-sm", "rotate-180");
                    title.classList.add("text-lg", "xs:text-xl", "lg:text-3xl", "3xl:text-4xl", "opacity-100", "duration-500");
                } else {
                    // Apply vertical style for inactive slides
                    title.style.writingMode = "vertical-lr";
                    title.style.transform = "rotate(180deg)";
                    title.style.opacity = "1";
                    title.style.fontSize = "x-large";
                    title.style.lineHeight = "2.5";
                    title.classList.remove("text-lg", "xs:text-xl", "lg:text-3xl", "3xl:text-4xl");
                    title.classList.add("text-sm", "opacity-100", "duration-500", "rotate-180");
                }
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

