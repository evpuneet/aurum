const swiper = new Swiper(".mySwiper", {
    loop: false, // Keep it false to avoid infinite looping issues
    effect: "fade", // Enable fade transition
    fadeEffect: {
      crossFade: true, // Smooth transition
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: true, // We don’t need navigation buttons
  });
  
  // Select all the pagination divs
  const paginationButtons = document.querySelectorAll(".testimonial-button");
  
  // Function to update active state
  function updateActivePagination(index) {
    paginationButtons.forEach((btn) => {
      btn.classList.remove("active"); // Remove active class
      btn.style.backgroundColor = "#99999980"; // Reset to normal BG
    });
  
    // Set active state for the current index
    let activeButton = document.querySelector(`.testimonial-button[data-index="${index}"]`);
    if (activeButton) {
      activeButton.classList.add("active");
      activeButton.style.backgroundColor = "#FFFFFFCC"; // Light white BG
    }
  }
  
  // Set the first button as active on page load
  updateActivePagination(0);
  
  // Add click event to each pagination div
  paginationButtons.forEach((button) => {
    button.addEventListener("click", function () {
      let index = parseInt(this.getAttribute("data-index")); // Get index
      swiper.slideTo(index, 1000); // Move to slide with 500ms transition
      updateActivePagination(index); // Update active state
    });
  });
  
  // Handle slide change to update pagination
  swiper.on("slideChange", function () {
    updateActivePagination(swiper.activeIndex);
  });
  