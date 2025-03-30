window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    // Check if the page has been scrolled down more than 50 pixels
    // If so, add the 'scrolled' class to the header
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});