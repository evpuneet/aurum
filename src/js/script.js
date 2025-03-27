// Select the toggle button inside <li>
const megaMenuToggle = document.getElementById('meagaMenuBtn_lg');

// Select all dropdowns inside nav (the hidden divs inside li)
const dropdowns = document.querySelectorAll("nav ul li div > div.hidden");

// Select the nav container using the correct ID selector
const navDiv = document.getElementById("navDiv"); //id-navDiv 

// Correct way to select elements with exclude-from-megamenu class
const excludedItems = document.querySelectorAll(".exclude-from-megamenu");

// Function to check scroll position and update header
function updateHeaderBackground() {
    if (window.scrollY > 0) { // Changed from 50 to 0
        navDiv.style.backgroundColor = '#000';
    } else {
        // Only make transparent if at top of page AND mega menu is closed
        if ([...dropdowns].every(dropdown => dropdown.classList.contains('hidden'))) {
            navDiv.style.backgroundColor = 'transparent';
        }
    }
}

// Function to toggle dropdowns
megaMenuToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdowns.forEach((dropdown) => {
        dropdown.classList.toggle("hidden");
    });

    // Toggle visibility of excluded items
    excludedItems.forEach((item) => {
        item.classList.toggle("hidden");
    });

    // Check menu state and scroll position
    if (1==1) {
        navDiv.style.backgroundColor = '#000';
    } else {
        // Only make transparent if at top of page
        if (window.scrollY === 0) {
            navDiv.style.backgroundColor = 'transparent';
        }
    }
});

// Handle scroll events
window.addEventListener('scroll', updateHeaderBackground);

// Close dropdowns when clicking outside
document.addEventListener("click", function (event) {
    if (!event.target.closest("nav ul li") && !event.target.closest('meagaMenuBtn_lg')) {
        dropdowns.forEach((dropdown) => dropdown.classList.add("hidden"));
        
        // Only make transparent if at top of page
        if (window.scrollY === 0) {
            navDiv.style.backgroundColor = 'transparent';
        }
    }
});




