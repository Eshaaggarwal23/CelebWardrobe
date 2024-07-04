document.querySelector('a[href="#footer-link"]').addEventListener('click', function (e) {
    e.preventDefault();
    
    const footer = document.getElementById('footer-link');
    
    // Scroll to the footer smoothly
    footer.scrollIntoView({ behavior: 'smooth' });
});