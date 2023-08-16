//animation on first
function show_first_section() {
    document.querySelector('.section1').classList.add('active');
}
setTimeout(show_first_section, 1000);

//audio btn
var audio = document.getElementById('audio');
var btn = document.getElementById('audio-btn');
btn.onclick = function () {
    btn.classList.toggle('disabled');
    if (btn.classList.contains('disabled'))
        audio.pause();
    else
        audio.play();
}

//scroll pages
function go_next(page1, page2) {
    document.querySelector('.' + page1).classList.remove('active');
    document.querySelector('.' + page2).classList.add('active');
}

//slider
const slider = new Swiper('.section2__slider', {
    direction: 'horizontal',
    speed: 800,
    slidesPerView: '1',
    spaceBetween: 100,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.section2__slider-next',
        prevEl: '.section2__slider-prev'
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    }
});