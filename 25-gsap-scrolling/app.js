const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');

// set tweenLite
// (what you want to move, duration, {animation properties - color or position})
// const tween = TweenLite.to('.cover', 1, {
//   width: "40%"
// });

// set timelinemax
const tl = new TimelineLite({ paused: true })
tl.to('.cover', 1, {
  width: '60%',
  ease: Power2.easeOut
})
.to('nav', 1, {
  height: '100%',
  ease: Power2.easeOut
})

navButton.addEventListener('click', () => {
  // start the animation set above
  tl.play();
});