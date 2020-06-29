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
})();