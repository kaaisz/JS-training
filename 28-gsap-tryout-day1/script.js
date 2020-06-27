/**
 *  TweenMax.to (element, duration as seconds, {
 *      -Tweenmax properties https://greensock.com/docs/v2/TweenMax -
        delay: 1.6,
        y: "100%",
        ease: Expo.easeInOut - https://greensock.com/docs/v2/Easing/Expo
    });
 */

// backgrond delay
TweenMax.to (".bg", 2, {
    width: "100%",
    ease: Expo.easeInOut
});

/**
 *  TweenMax.from (element, duration as seconds, {
 *      -Tweenmax properties https://greensock.com/docs/v2/TweenMax -
        delay: 1.6,
        y: "100%",
        ease: Expo.easeInOut - https://greensock.com/docs/v2/Easing/Expo
    });
 */

// text delay
TweenMax.from (".text h1 .hide", 1.5, {
    delay: 1.6,
    y: "100%",
    ease: Expo.easeInOut
});

TweenMax.from (".text p .hide", 1.5, {
    delay: 2,
    y: "100%",
    ease: Expo.easeInOut
});