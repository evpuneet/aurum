
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('h4');
    const animationDuration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps

    const animateCount = (el, start, end, decimalPlaces = 0) => {
        let current = start;
        const range = end - start;
        const step = () => {
            const progress = Math.min(1, (Date.now() - startTime) / animationDuration);
            current = start + (range * progress);
            el.textContent = decimalPlaces === 0 ? 
                Math.floor(current).toLocaleString() : 
                current.toFixed(decimalPlaces);
            if (progress < 1) requestAnimationFrame(step);
        };
        let startTime = Date.now();
        step();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const originalNumber = parseFloat(target.textContent.replace(/,/g, ''));
                const decimalPlaces = target.textContent.includes('.') ? 1 : 0;
                
                animateCount(target, 0, originalNumber, decimalPlaces);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.75 });

    counters.forEach(counter => {
        if (!isNaN(parseFloat(counter.textContent))) {
            observer.observe(counter);
        }
    });
});
