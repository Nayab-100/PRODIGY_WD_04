// script.js

document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.animate');
    
    const elementInView = (element) => {
        const elementTop = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        return elementTop <= viewportHeight - 150;
    };

    const displayAnimation = () => {
        animateElements.forEach((element) => {
            if (elementInView(element)) {
                element.classList.add('in-view');
            }
        });
    };

    window.addEventListener('scroll', displayAnimation);
    displayAnimation(); // Initial check
});
