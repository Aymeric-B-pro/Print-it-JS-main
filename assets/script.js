const slides = [
    {
        "image":"./assets/images/slideshow/slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"./assets/images/slideshow/slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"./assets/images/slideshow/slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"./assets/images/slideshow/slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]
const dots = document.querySelectorAll('.dot');
const bannerImg = document.querySelector('.banner-img');
const tagline = document.querySelector('#tagline');

let currentSlideIndex = 0;

function showSlide(index) {
    const selectedSlide = slides[index];
    bannerImg.src = selectedSlide.image;
    tagline.innerHTML = selectedSlide.tagLine;
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.remove('dot_selected');
        if (index === currentSlideIndex) {
            dot.classList.add('dot_selected');
        }
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlideIndex = index;
        showSlide(currentSlideIndex);
        updateDots();
    });
});

function changeSlide(direction) {
    if (direction === "next") {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    } else if (direction === "prev") {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    }
    showSlide(currentSlideIndex);
    updateDots();
}

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

arrowLeft.addEventListener('click', () => {
    changeSlide("prev");
});

arrowRight.addEventListener('click', () => {
    changeSlide("next");
});

function autoSlide() {
    changeSlide("next");
}

setInterval(autoSlide, 5000);

showSlide(currentSlideIndex);
updateDots();