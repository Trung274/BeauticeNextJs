// Mobile Menu Logic
const toggleButton = document.getElementById('toggle-menu');
const closeButton = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

toggleButton.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

// Scrolltop Button
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // Show/hide button based on scroll position
    function handleScroll() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.pageYOffset;

        // Check if we're at the bottom of the page (within 20px)
        if (windowHeight + scrollPosition >= documentHeight - 20) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.pointerEvents = 'auto';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.pointerEvents = 'none';
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initial check for button visibility
    handleScroll();
});