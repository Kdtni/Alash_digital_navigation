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



document.addEventListener("DOMContentLoaded", function () {
    // Анимация появления при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Наблюдаем за карточками
    document.querySelectorAll(".testimonial-card").forEach((card) => {
        observer.observe(card);
    });

    // Обработчик для кнопки отзыва
    document
        .querySelector(".cta-button")
        .addEventListener("click", function (e) {
            if (!this.href.includes("consultation_form.html")) {
                e.preventDefault();
                // Можно добавить форму для отзыва или перенаправить на существующую
                alert(
                    "Для оставления отзыва заполните форму консультации или свяжитесь с нами"
                );
            }
        });
});