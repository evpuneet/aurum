// Get modal and elements
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle"); //for h2 and heading of the modal
// const modalContent = document.getElementById("modalContent"); 
const closeModalBtn = document.getElementById("closeModal"); 

// Select all buttons that open the modal
const openModalBtns = document.querySelectorAll(".openModalBtn");

// Open modal when any button is clicked
openModalBtns.forEach(button => {
    button.addEventListener("click", () => {
        const title = button.getAttribute("data-title");
        const content = button.getAttribute("data-content");

        modalTitle.textContent = title;
        // modalContent.textContent = content;

        modal.classList.remove("hidden");
    });
});

// Close modal
closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Close modal when clicking outside the content
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});

// floading effect for the header

document.addEventListener("DOMContentLoaded", function () {
    let timeout;
    const floatingDiv = document.getElementById("floatingBar"); // Target by ID

    function hideDiv() {
        floatingDiv.style.transform = "translateY(200%)"; // Move it down
        // floatingDiv.style.transition = "transform 1s ease-in-out";
    }

    function showDiv() {
        floatingDiv.style.transform = "translateY(0%)"; // Bring it back
        // floatingDiv.style.transition = "transform 1s ease-in-out";

        clearTimeout(timeout);
        timeout = setTimeout(hideDiv, 4000); // Hide after 4s of inactivity
    }

    // Detect scrolling anywhere on the page
    window.addEventListener("scroll", showDiv);
    
    // Detect tapping or movement on the screen
    document.addEventListener("touchstart", showDiv);
    document.addEventListener("mousemove", showDiv);

    // Initially set timeout to hide the div after 4 seconds
    timeout = setTimeout(hideDiv, 4000);
});
