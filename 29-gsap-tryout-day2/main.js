const slider = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 150,
    centeredSlides: true,
    mousewheel: true
})

slider.on('slideChange', function() {
    TweenMax.to('.slide-text span', .2, {
        y: '-100px'
    })
    TweenMax.to('.slide-number span', .2, {
        x: '-100px'
    })
    TweenMax.to('.swiper-slide-active', .5, {
        scale: .85
    })
})

// slider.on('slideChangeTransitionEnd', function() {
//     TweenMax.to('.slide-text span', .2, {
//         y: 0,
//         delay: .5
//     })
//     TweenMax.to('.slide-text span', 0, {
//         y: '100px',
//     })
//     TweenMax.to('.slide-number span', .2, {
//         x: 0,
//         delay: .7
//     })
//     TweenMax.to('.slide-number span', 0, {
//         x: '100px',
//     })
// }