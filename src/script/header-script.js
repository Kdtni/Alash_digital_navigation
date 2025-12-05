let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach(s => (s.style.display = "none"));
    dots.forEach(d => d.classList.remove("active"));

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

// Автосмена
setInterval(() => {
    plusSlides(1);
}, 5000);

// Кнопки
document.querySelector(".prev").onclick = () => plusSlides(-1);
document.querySelector(".next").onclick = () => plusSlides(1);

// Точки
document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.onclick = () => currentSlide(index);
});
