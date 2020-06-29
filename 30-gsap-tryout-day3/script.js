(function() {
    TweenMax.to ('.left', 2, {
        delay: .8,
        width: '60%',
        ease: Power2.easeInOut
    })
    TweenMax.to ('.right', 2, {
        delay: .6,
        width: '40%',
        ease: Power2.easeInOut
    })
    TweenMax.from ('.text h1', 2, {
        delay: .6,
        x: 1000,
        ease: Circ.easeInOut
    })
    TweenMax.from ('.text h2', 2, {
        delay: .7,
        x: 1000,
        ease: Circ.easeInOut
    })
    TweenMax.to ('.anna', 2, {
        delay: 1.5,
        width: '800px',
        ease: Power2.easeInOut
    })
    // animate each bottom menu with foreach loop
    TweenMax.staggerFrom ('.bottomnav ul li', 2, {
        delay: 1,
        x: 1000,
        ease: Circ.easeInOut
    }, 0.08)
    TweenMax.from ('.info', 2, {
        delay: 1.5,
        y: 100,
        ease: Circ.easeInOut
    })
    TweenMax.from ('.name', 2, {
        delay: 1.5,
        x: -600,
        ease: Circ.easeInOut
    })
})();