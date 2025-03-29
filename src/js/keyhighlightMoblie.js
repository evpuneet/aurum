const slides = [
  {
    image: "./public/keyHighlight_mobli.png",
    title: " Prime location",
    text: "Situated on the sector-dividing road of Sector 67, The Pinnacle provides easy access to Chandigarh International Airport, IT City, and prominent educational institutions."
  },
  {
    image: "./public/keyHighlight_mobli2.webp", 
    title: "Spacious Residences",
    text: "The project features meticulously designed 3+1 and 4+1 BHK apartments, ranging from 2,950 to 3,900 sq. ft., ensuring ample living space."
  },
  {
    image: "./public/keyHighlight_mobli3.webp",
    title: "Extensive Amenities",
    text: "Residents can enjoy a clubhouse, gymnasium, swimming pool, spa, indoor games, and dedicated areas for tennis, basketball, and volleyball."
  }
];

let KeyMob = 0;

  // DOM Elements
  const slider = document.getElementById('slider');
  const sliderImg = document.getElementById('slider-img');
  const sliderTitle = document.getElementById('slider-title');
  const sliderText = document.getElementById('slider-text');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');

  // Function to update slider content with a fade effect
  function updateSlider(index) {
    // Add fade-out class for transition
    slider.classList.add('fade-out');

    // Wait for fade-out to complete before updating content
    setTimeout(() => {
      sliderImg.src = slides[index].image;
      sliderTitle.textContent = slides[index].title;
      sliderText.textContent = slides[index].text;

      // Remove fade-out to show fade-in effect
      slider.classList.remove('fade-out');
    }, 500); // match the CSS transition duration
  }

  // Event Listeners for buttons
  nextBtn.addEventListener('click', () => {
    KeyMob = (KeyMob + 1) % slides.length;
    updateSlider(KeyMob);
  });

  prevBtn.addEventListener('click', () => {
    KeyMob = (KeyMob - 1 + slides.length) % slides.length;
    updateSlider(KeyMob);
  });

  // Initialize slider with first slide
  document.addEventListener('DOMContentLoaded', () => {
    updateSlider(KeyMob);
  });