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

navButton.addEventListener('click', () => {
  // start the animation set above
  tl.play();
});