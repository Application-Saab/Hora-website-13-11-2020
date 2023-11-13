document.addEventListener("DOMContentLoaded", function () {
const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentSlide * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Optionally, add automatic slide change (e.g., every 5 seconds)
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}, 5000);
})
