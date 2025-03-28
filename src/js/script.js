// Select elements
const megaMenuToggle = document.getElementById('meagaMenuBtn_lg');
const dropdowns = document.querySelectorAll("nav ul li div > div.hidden");
const navDiv = document.getElementById("navDiv");
const excludedItems = document.querySelectorAll(".exclude-from-megamenu");
const burgerImage = megaMenuToggle.querySelector('img'); // Burger icon
const crossSvgContainer = megaMenuToggle.querySelector('div'); // Cross icon

// State tracking
let isMenuOpen = false;
let isProcessing = false;

// Ensure the default state: burger visible, cross hidden
burgerImage.style.display = 'block';
crossSvgContainer.style.display = 'none';

// Updated scroll handler
function updateHeaderBackground() {
    // Black background if either:
    // 1. User has scrolled, OR
    // 2. Mega menu is open
    const shouldBeBlack = window.scrollY > 0 || isMenuOpen;
    navDiv.style.backgroundColor = shouldBeBlack ? '#000' : 'transparent';
}

megaMenuToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    if (isProcessing) return;
    
    isProcessing = true;
    isMenuOpen = !isMenuOpen;

    // Toggle mega menu dropdowns, etc.
    dropdowns.forEach(dropdown => {
        dropdown.classList.toggle("hidden", !isMenuOpen);
    });
    excludedItems.forEach(item => {
        item.classList.toggle("hidden", isMenuOpen);
    });
    navDiv.style.backgroundColor = isMenuOpen || window.scrollY > 0 ? '#000' : 'transparent';

    // Toggle the icons: show cross when open, burger when closed
    if (isMenuOpen) {
        burgerImage.style.display = 'none';
        crossSvgContainer.style.display = 'block';
    } else {
        burgerImage.style.display = 'block';
        crossSvgContainer.style.display = 'none';
    }
    
    setTimeout(() => isProcessing = false, 100); // 100ms debounce
});

// Scroll handler
window.addEventListener('scroll', updateHeaderBackground);

// REMOVED ALL CLICK-OUTSIDE HANDLERS
// No document.click listeners
// No automatic closures

const why404 = document.getElementById("why404");
why404.addEventListener("click", ()=>{console.log("clicked the 404 btn")})