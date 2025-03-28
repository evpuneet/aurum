// Slide data (add your content and image paths here)
const slides = [
    {
      image: './public/keyHighlight_mobli.png',
      title: 'Prime Location',
      text: 'Situated on the sector-dividing road of Sector 67...'
    },
    {
      image: './public/hero.png',
      title: 'Another Feature',
      text: 'Description for second slide...'
    },
    // Add more slides as needed
  ];

  // DOM elements
  const slideContainer = document.getElementById('keySliderMobile');
  const imageElement = slideContainer.querySelector('img');
  const titleElement = slideContainer.querySelector('h3');
  const textElement = slideContainer.querySelector('p');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  let currentSlide = 0;

  // Add transition class to container
  slideContainer.classList.add('slide-transition');

  function updateSlide() {
    // Fade out
    slideContainer.classList.remove('slide-visible');
    slideContainer.classList.add('slide-hidden');

    // Wait for transition to complete
    setTimeout(() => {
      // Update content
      imageElement.src = slides[currentSlide].image;
      titleElement.textContent = slides[currentSlide].title;
      textElement.textContent = slides[currentSlide].text;

      // Fade in
      slideContainer.classList.remove('slide-hidden');
      slideContainer.classList.add('slide-visible');
    }, 500); // Match transition duration
  }

  // Navigation handlers
  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
  });

  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
  });

  // Initialize first slide
  updateSlide();