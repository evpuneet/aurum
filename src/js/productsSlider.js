// Apartment Data
const apartments = [
    { name: "Semi Furnished", price: "3000 ", image: "url('./public/hero.png')" },
    { name: "Fully Furnished", price: "2300", image: "url('./public/sectiontwo.png')" },
    { name: "Semi Furnished", price: "2500", image: "url('./public/hero.png')" },
    { name: "Fully Furnished", price: "2300", image: "url('./public/sectiontwo.png')" },
    // { name: "Semi Furnished", price: "2500", image: "url('./public/hero.png')" },
];

let currentSlide = 0;
let autoplayTimeout;

// Select Elements
const sliderContainer_mob = document.getElementById("slider-container-res");
const slideNumber_mob = document.getElementById("slide-number-res");
const apartmentName_mob = document.getElementById("apartment-name-res");
const apartmentPrice_mob = document.getElementById("apartment-price-res");
const prevButton_mob = document.getElementById("prev-slide-res");
const nextButton_mob = document.getElementById("next-slide-res");

// Select Elements
const sliderContainer = document.getElementById("slider-container");
const slideNumber = document.getElementById("slide-number");
const apartmentName = document.getElementById("apartment-name");
const apartmentPrice = document.getElementById("apartment-price");
const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");
const tabs = document.querySelectorAll(".tab");
const tabIndicator = document.getElementById("tab-indicator");


const totalSlides = apartments.length;

// Function to Update Slide
function updateSlide(index) {
    currentSlide = index;
    
    // Update slider content
    sliderContainer.style.backgroundImage = apartments[currentSlide].image;
    apartmentName.textContent = apartments[currentSlide].name;
    apartmentPrice.textContent = "Price: " + apartments[currentSlide].price;
    slideNumber.textContent = `${(currentSlide + 1).toString().padStart(2, "0")}/${totalSlides.toString().padStart(2, "0")}`;

    // Update tabs
    tabs.forEach((tab, i) => {
        if (i === currentSlide) {
            // Active tab - black text on desktop, white on mobile (default)
            tab.classList.remove('md:text-[#787878]');
            tab.classList.add('md:text-[#000000]');
        } else {
            // Inactive tabs - gray on desktop, white on mobile
            tab.classList.add('md:text-[#787878]');
            tab.classList.remove('md:text-[#000000]');
        }
    });

    // Update tab indicator position
    const activeTab = tabs[currentSlide];
    tabIndicator.style.width = `${activeTab.offsetWidth}px`;
    tabIndicator.style.left = `${activeTab.offsetLeft}px`;
}

// Auto-play functionality
function startAutoplay() {
    autoplayTimeout = setTimeout(() => {
        nextButton.click();
        startAutoplay();
    }, 5000); // Change slide every 3 seconds
}

// Event Listeners with auto-play reset
function addEventListeners() {
    nextButton.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide(currentSlide);
        resetAutoplay();
    });

    prevButton.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlide(currentSlide);
        resetAutoplay();
    });

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            updateSlide(index);
            resetAutoplay();
        });
    });
}

function resetAutoplay() {
    clearTimeout(autoplayTimeout);
    startAutoplay();
}

// Initialize slider
updateSlide(0);
addEventListeners();
startAutoplay();


// for moblie responseive


// Function to Update Slide
function updateSlide_mob(index) {
    currentSlide = index;
    sliderContainer_mob.style.backgroundImage = apartments[currentSlide].image;
    apartmentName_mob.textContent = apartments[currentSlide].name;
    apartmentPrice_mob.textContent = "Price: " + apartments[currentSlide].price;
    // slideNumber_mob.textContent = `${(currentSlide + 1).toString().padStart(2, "0")}/${totalSlides.toString().padStart(2, "0")}`;

    // Update tab indicator position
    const activeTab = tabs[currentSlide];
    tabIndicator.style.width = `${activeTab.offsetWidth}px`;
    tabIndicator.style.left = `${activeTab.offsetLeft}px`;
}

// Auto-play functionality
function startAutoplay_mob() {
    autoplayTimeout = setTimeout(() => {
        nextButton_mob.click();
        startAutoplay_mob();
    }, 5000); // Change slide every 3 seconds
}

// Event Listeners with auto-play reset
function addEventListeners_mob() {
    nextButton_mob.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide_mob(currentSlide);
        resetAutoplay();
        // console.log("clicked");
    });

    prevButton_mob.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlide_mob(currentSlide);
        resetAutoplay();
    });

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            updateSlide_mob(index);
            resetAutoplay();
        });
    });
}

function resetAutoplay() {
    clearTimeout(autoplayTimeout);
    startAutoplay_mob();
}


// Initialize slider
updateSlide_mob(0);
addEventListeners_mob();
startAutoplay_mob();

