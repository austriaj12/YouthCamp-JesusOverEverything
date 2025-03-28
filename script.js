// Hamburger Menu Functionality
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const dotsContainer = document.querySelector(".slider-dots");

    let index = 0;
    const totalImages = images.length;
    let interval;

    // Create dots
    for (let i = 0; i < totalImages; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.dataset.index = i;
        dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll(".dot");

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    function nextSlide() {
        index = (index + 1) % totalImages;
        updateSlider();
    }

    function prevSlide() {
        index = (index - 1 + totalImages) % totalImages;
        updateSlider();
    }

    function startAutoSlide() {
        interval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    prevButton.addEventListener("click", () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    nextButton.addEventListener("click", () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    dots.forEach(dot => {
        dot.addEventListener("click", function () {
            stopAutoSlide();
            index = parseInt(this.dataset.index);
            updateSlider();
            startAutoSlide();
        });
    });

    updateSlider();
    startAutoSlide();
});
