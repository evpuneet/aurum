// Get modal and buttons
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

// Open modal
openModalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
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



// 