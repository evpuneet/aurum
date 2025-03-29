const swiper = new Swiper(".mySwiper", {
  loop: false,
  effect: "fade",
  fadeEffect: { crossFade: true },
  autoplay: { delay: 2500, disableOnInteraction: false },
  navigation: true,
});

const paginationButtons = document.querySelectorAll(".testimonial-button");

function updateActivePagination(index) {
  paginationButtons.forEach((btn) => {
    // Reset all buttons
    btn.classList.remove("active");
    btn.style.backgroundColor = "#99999980";
    
    // Reset text colors to white
    const h5 = btn.querySelector('h5');
    const p = btn.querySelector('p');
    
    if (h5) {
      h5.classList.remove('text-[#2C2C2C]');
      h5.classList.add('text-[#FFFFFF]');
    }
    if (p) {
      p.classList.remove('text-[#7D7D7D]');
      p.classList.add('text-[#FFFFFF]');
    }
  });

  // Set active state
  const activeButton = document.querySelector(`.testimonial-button[data-index="${index}"]`);
  if (activeButton) {
    activeButton.classList.add("active");
    activeButton.style.backgroundColor = "#FFFFFFCC";

    // Set dark text colors
    const activeH5 = activeButton.querySelector('h5');
    const activeP = activeButton.querySelector('p');
    
    if (activeH5) {
      activeH5.classList.remove('text-[#FFFFFF]');
      activeH5.classList.add('text-[#2C2C2C]');
    }
    if (activeP) {
      activeP.classList.remove('text-[#FFFFFF]');
      activeP.classList.add('text-[#7D7D7D]');
    }
  }
}

// Initialize first button
updateActivePagination(0);

paginationButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const index = parseInt(this.getAttribute("data-index"));
    swiper.slideTo(index, 1000);
    updateActivePagination(index);
  });
});

swiper.on("slideChange", () => updateActivePagination(swiper.activeIndex));