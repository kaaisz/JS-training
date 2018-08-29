////////////////////////////////////////////////////////////////////
//This is the script for how to make smooth scroll by Vanilla.js

//---Japanese Reference---//
///const - https://sbfl.net/blog/2016/07/14/javascript-var-let-const/
///pageYOffset - https://developer.mozilla.org/ja/docs/Web/API/Window/scrollY
///performance - https://developer.mozilla.org/ja/docs/Web/API/Performance
///scrollHeight - http://js.studio-kingdom.com/javascript/element/scroll_height
///offsetHeight - http://js.studio-kingdom.com/javascript/element/offset_height
///documentElement - https://developer.mozilla.org/ja/docs/Web/API/Document/documentElement
///getElementsByTagName - https://developer.mozilla.org/ja/docs/Web/API/Document/getElementsByTagName
///requestAnimationFrame - https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame
///typeof 演算子 - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/typeof

////////////////////////////////////////////////////////////////////

'use strict';
//---build constructure---//
function scrollIt(destination, duration = 200, easing = 'linear', callback){
  const easings = {
    linear(t){
      return t;
    },
    easeInQuad(t){
      return t * t;
    },
    easeOutQuad(t){
      return t * (2 - t);
    },
    easeInOutQuad(t){
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t){
      return t * t * t;
    },
    easeOutCubic(t){
      return (--t) * t * t + 1;
    },
    easeInOutCubic(t){
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t){
      return t * t * t * t;
    },
    easeOutQuart(t){
      return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t){
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t){
      return t * t * t * t * t;
    },
    easeOutQuint(t){
      return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t){
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    },
  };
  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  //take height of window and document to solve max scrollable value
  //prevent requestAnimationFrame() from scrolling below maximum scrollable value
  //resolve destination type(node or number)
  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);


  //if requestanimation is not supported
  //move window to destination position and trigger callback function
  if ('requestAnimationFrame' in window === false){
    window.scroll(0, destinationOffsetToScroll);
    if(callback){
      callback();
    }
  }


  //function resolves position of a window and moves to exact amount of pixels
  //resolved by calculating delta and timing function choosen by user
  function scroll(){
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1,((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
    //stop requesting animation when window reached its destination
    //and run a callback function
    if(window.pageYOffset === destinationOffsetToScroll){
      if(callback){
        callback();
      }
      return;
    }
    //If window still needs to scroll to reach destination
    //Request another scroll invokation
    requestAnimationFrame(scroll);
  }
  //invoke scroll
  scroll();
}


//---Scrolling function---//
//scroll to section1
document.querySelector('.js-btn1').addEventListener('click', () => {
  scrollIt(//invoke scrollIt
    document.querySelector('.js-section1'), 300, 'easeOutQuad', () => //where to, how fast the speedwidth, what the class do u wanna link up with
    console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

//scroll to section2
document.querySelector('.js-btn2').addEventListener('click', () => {
  scrollIt(//invoke scrollIt
    document.querySelector('.js-section2'), 300, 'easeOutQuad', () => //where to, how fast the speedwidth, what the class do u wanna link up with
    console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

//scroll to section3
document.querySelector('.js-btn3').addEventListener('click', () => {
  scrollIt(//invoke scrollIt
    document.querySelector('.js-section3'), 300, 'easeOutQuad', () => //where to, how fast the speedwidth, what the class do u wanna link up with
    console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

//scroll to 500px
document.querySelector('.js-btn500').addEventListener('click', () => {
  scrollIt(//invoke scrollIt
    500, 300, 'easeOutQuad', () => //where to, how fast the speedwidth, what the class do u wanna link up with
    console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

//scroll to 50000px(for longer than document)
document.querySelector('.js-btn50000').addEventListener('click', () => {
  scrollIt(//invoke scrollIt
    50000, 300, 'easeOutQuad', () => //where to, how fast the speedwidth, what the class do u wanna link up with
    console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});
