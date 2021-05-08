window.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    })
    document.querySelector('#burger_320').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    })
})