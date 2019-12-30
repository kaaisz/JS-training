const navButton = document.querySelectorAll('.nav-button');
const navOpen = document.querySelector('.nav-open');

// set tweenLite
// (what you want to move, duration, {animation properties - color or position})
// const tween = TweenLite.to('.cover', 1, {
//   width: "40%"
// });

// set timelinemax
const tl = new TimelineLite({ paused: true, reversed: true })
tl.to('.cover', 1, {
  width: '60%',
  ease: Power2.easeOut
})
.to('.cover-heading', .35, {
  opacity: 0,
  ease: Power2.easeOut
}, '-= 1')
.to('nav', 1, {
  height: '100%',
  ease: Power2.easeOut
  // code below made this element move .5s faster
}, '-= 0.5')
.fromTo(
  '.nav-open', 
  0.5, 
  {
    // 1st animation 
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
  }, 
  {
    // 2nd animation 
    opacity: 1,
    x: 0,
    onComplete: function() {
      navOpen.style.pointerEvents = 'auto';
      console.log('done');
    }
  }
);

navButton.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    // disable all the animation if another animation is already active
    if(tl.isActive()) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
    }
    // start the animation set above
    // tl.play();
    toggleTween(tl);
  });
});

function toggleTween(tween) {
  // tween.play = tl.play();
  // play-reverse
  tween.reversed() ? tween.play() : tween.reverse(); 
}

const tl2 = new TimelineMax({onUpdate: updatePercentage});
const controller = new ScrollMagic.Controller();

// set original start point
tl2.from("blockquote", 1, {x: 200, opacity: 0.25})
tl2.from(".main__img_restaurant", 1, {x: -200, opacity: 0});
tl2.from(".main__img_chef", 1, {x: 200, opacity: 0});

const scene = new ScrollMagic.Scene({
	triggerElement: ".main",
	triggerHook: "onLeave",
	duration: '100%'
})
	.setPin(".main")
	.setTween(tl2)
	.addTo(controller);

function updatePercentage() {
	tl2.progress();
	console.log(tl2.progress());
}