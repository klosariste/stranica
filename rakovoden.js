let bar = document.querySelector('.bars'),
navItem = document.querySelector('.nav-items');

bar.addEventListener('click', () => {
    navItem.classList.toggle('active');
})
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}