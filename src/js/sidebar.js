// sidebarlogic
document.addEventListener("DOMContentLoaded", function () {
    const sidebarWrapper = document.getElementById("sidebarWrapper");
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleSidebar");
    const closeBtn = document.getElementById("closeSidebar");
    const backdrop = document.getElementById("backdrop");

    function openSidebar() {
        sidebarWrapper.classList.remove("hidden");  // Show wrapper (backdrop + sidebar)
        setTimeout(() => {
            sidebar.classList.remove("translate-x-full"); // Slide in sidebar
        }, 10); // Small delay for smooth transition
    }

    function closeSidebar() {
        sidebar.classList.add("translate-x-full"); // Slide out sidebar
        setTimeout(() => {
            sidebarWrapper.classList.add("hidden"); // Hide wrapper after animation
        }, 300); // Match the transition duration
    }

    toggleBtn.addEventListener("click", openSidebar);
    closeBtn.addEventListener("click", closeSidebar);
    backdrop.addEventListener("click", closeSidebar);
});
