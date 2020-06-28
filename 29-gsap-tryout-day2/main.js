const slider = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 150,
    centeredSlides: true,
    mousewheel: true
})

// hide all the text while slide is changing
slider.on('slideChange', function() {
    TweenMax.to('.slide-text span', .2, {
        y: '0',
        autoAlpha: 0
    })
    TweenMax.to('.slide-number span', .2, {
        x: '-100px'
    })
    TweenMax.to('.swiper-slide-active', .5, {
        scale: .85
    })
})

// show all the text with easing when slide is shown up
slider.on('slideChangeTransitionEnd', function() {
    TweenMax.to('.slide-text span', .2, {
        y: 0,
        delay: .5
    })
    TweenMax.to('.slide-text span', 0, {
        y: '100px',
        autoAlpha: 1
    })
    TweenMax.to('.slide-number span', .2, {
        x: 0,
        delay: .7
    })
    TweenMax.to('.slide-number span', 0, {
        x: '100px',
    })

    /** 
     * TweenMax.to(element, duration, {
        scale: 1,
        ease: Power4.easeOut - power of 4 with easeout
        https://greensock.com/docs/v2/Easing
        https://greensock.com/docs/v2/Easing/Power4
    })
    */
    TweenMax.to('.swiper-slide-active', .5, {
        scale: 1,
        ease: Power4.easeOut
    })

    TweenMax.to('.swiper-slide-active .slide-text', 0, {
        autoAlpha: 1
    })
    TweenMax.to('.swiper-slide-active .slide-number', 0, {
        autoAlpha: 1
    })

    // hide title for prev and next slide
    TweenMax.to('.swiper-slide-next .slide-text', 0, {
        autoAlpha: 0
    })
    TweenMax.to('.swiper-slide-prev .slide-text', 0, {
        autoAlpha: 0
    })

    // hide number for prev and next slide
    TweenMax.to('.swiper-slide-next .slide-number', 0, {
        autoAlpha: 0
    })
    TweenMax.to('.swiper-slide-prev .slide-number', 0, {
        autoAlpha: 0
    })
})

// hide text and numbers initially for the previous and next slide
TweenMax.to('.swiper-slide-next .slide-text', 0, {
    autoAlpha: 0,
})
TweenMax.to('.swiper-slide-prev .slide-text', 0, {
    autoAlpha: 0,
})

TweenMax.to('.swiper-slide-prev .slide-number', 0, {
    autoAlpha: 0,
})
TweenMax.to('.swiper-slide-prev .slide-number', 0, {
    autoAlpha: 0,
})

TweenMax.to('.swiper-slide', 0, {
    scale: .85,
})
TweenMax.to('.swiper-slide-active', 0, {
    scale: 1,
})