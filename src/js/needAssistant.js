// // Add this JavaScript
//   const trigger = document.getElementById('menuTrigger');
//   const menu = document.getElementById('radialMenu');

//   trigger.addEventListener('click', () => {
//     menu.classList.toggle('!left-0');
//     menu.classList.toggle('!opacity-100');
//   });

//   // Optional: Close menu when clicking outside
//   menu.addEventListener('click', (e) => {
//     if(e.target === menu) {
//       menu.classList.remove('!left-0', '!opacity-100');
//     }
//   });


// const trigger = document.getElementById('menuTrigger');
//   const menu = document.getElementById('radialMenu');

//   // Toggle menu with animations
//   function toggleMenu() {
//     const isOpening = !menu.classList.contains('!opacity-100');
    
//     // Rotate trigger
//     trigger.classList.toggle('rotate-90');
    
//     // Toggle menu visibility
//     menu.classList.toggle('!left-0');
//     menu.classList.toggle('!opacity-100');
//     menu.classList.toggle('pointer-events-auto');

//     // Animate menu items
//     if (isOpening) {
//       setTimeout(() => {
//         document.querySelectorAll('#radialMenu a').forEach((item, index) => {
//           item.style.transitionDelay = `${index * 100}ms`;
//           item.classList.add('scale-100', 'opacity-100');
//         });
//       }, 50);
//     } else {
//       document.querySelectorAll('#radialMenu a').forEach(item => {
//         item.classList.remove('scale-100', 'opacity-100');
//         item.style.transitionDelay = '';
//       });
//     }
//   }

//   trigger.addEventListener('click', (e) => {
//     e.stopPropagation();
//     toggleMenu();
//   });

//   // Close menu when clicking outside
//   document.addEventListener('click', (e) => {
//     if (!menu.contains(e.target) && !trigger.contains(e.target)) {
//       if (menu.classList.contains('!opacity-100')) {
//         toggleMenu();
//       }
//     }
//   });

const trigger = document.getElementById('menuTrigger');
  const menu = document.getElementById('radialMenu');
  const menuItems = document.querySelectorAll('#radialMenu a');

  // Animation parameters
  const itemAnimation = {
    duration: 400,
    delayIncrement: 75,
    scaleFrom: 0.5,
    translateYFrom: '100px'
  };

  function toggleMenu() {
    const isOpening = !menu.classList.contains('active');
    
    // Toggle trigger rotation
    trigger.classList.toggle('active');
    
    // Toggle menu visibility
    menu.classList.toggle('active');
    menu.style.pointerEvents = isOpening ? 'auto' : 'none';

    // Animate menu items
    if (isOpening) {
      menuItems.forEach((item, index) => {
        item.style.cssText = `
          transition: all ${itemAnimation.duration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${index * itemAnimation.delayIncrement}ms;
          transform: scale(1) translateY(0);
          opacity: 1;
        `;
      });
    } else {
      menuItems.forEach((item, index) => {
        item.style.cssText = `
          transition: all ${itemAnimation.duration}ms cubic-bezier(0.36, 0, 0.66, -0.56) ${index * itemAnimation.delayIncrement}ms;
          transform: scale(${itemAnimation.scaleFrom}) translateY(${itemAnimation.translateYFrom});
          opacity: 0;
        `;
      });
    }
  }

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && menu.classList.contains('active')) {
      toggleMenu();
    }
  });