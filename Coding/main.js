function handleCarousel() {
    var carouselElement = document.getElementById('featuredEventsCarousel');
    if (window.innerWidth <= 768) {
        var carouselInstance = bootstrap.Carousel.getInstance(carouselElement);
        if (!carouselInstance) {
            new bootstrap.Carousel(carouselElement);
        }
    } else {
        var carouselInstance = bootstrap.Carousel.getInstance(carouselElement);
        if (carouselInstance) {
            carouselInstance.dispose();
        }
    }
}

// Run the function on page load
handleCarousel();

// Run the function on window resize
window.addEventListener('resize', handleCarousel);