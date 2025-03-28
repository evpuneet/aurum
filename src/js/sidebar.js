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

    // Add click event to all sidebar links
    const sidebarLinks = document.querySelectorAll('#sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });
});


const toggleButtons = document.querySelectorAll('.toggle-submenu');

toggleButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.stopPropagation();

    const li = this.closest('li');
    const submenu = li.querySelector('.submenu-container');
    const arrow = this.querySelector('svg');
    const isOpen = li.classList.contains('open');

    // Close other open submenus
    document.querySelectorAll('li.open').forEach(openLi => {
      if (openLi !== li) {
        openLi.classList.remove('open');
        const openSubmenu = openLi.querySelector('.submenu-container');
        openSubmenu.style.height = '0px';
        openSubmenu.style.opacity = '0';
        const openArrow = openLi.querySelector('.toggle-submenu svg');
        if (openArrow) {
          openArrow.style.transform = 'rotate(0deg)'; // Reset to downward position
        }
      }
    });

    if (!isOpen) {
      // Open this submenu
      li.classList.add('open');
      submenu.style.height = submenu.scrollHeight + 'px';
      submenu.style.opacity = '1';
      arrow.style.transform = 'rotate(180deg)'; // Point downward when open
    } else {
      // Close this submenu
      li.classList.remove('open');
      submenu.style.height = '0px';
      submenu.style.opacity = '0';
      arrow.style.transform = 'rotate(0deg)'; // Point upward when closed
    }
  });
});