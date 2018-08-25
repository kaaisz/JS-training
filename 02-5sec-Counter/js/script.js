(function(){
  'use strict';
  //when you stopped the timer, you have to be much closer to just 5 seconds

  //get element by id in HTML
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var result = document.getElementById('result');
  var startTime;
  var isStarted = false; //identify whether button has pushed or not. Init - false

  //setting event
  start.addEventListener('click', function(){
    if (isStarted===true) {
      return;
    }
    isStarted = true;// start identifying
    startTime = Date.now(); //Date.now()...able to fetch timelapsed record (mili seconds)
    this.className = 'pushed';
    stop.className = ''; // remove .puched when stop button was pressed
    result.textContent = '0.000';//reset timer after pushed stop then pushed start again
    result.className = 'standby';//replace class(.)standby after you could see red marked results.
  });

  stop.addEventListener('click', function(){
    var elapsedTime; //define for elapsed time
    var diff;
    if (isStarted===false){
      return;
    }
    isStarted = false;// stop identifying - make it init again
    elapsedTime = (Date.now() - startTime) / 1000; //convert from mili sec to sec
    result.textContent = elapsedTime.toFixed(3);
    //in this case, when elapsedTime was just 4 sec, below the decimal point will disappear.
    //so, change the appearance to see 3 digits after the decimal point every time, even if just 4 sec.
    this.className = 'pushed';
    start.className = ''; // remove class 'pushed' when stop button was pushed
    result.className = ''; // remove class 'perfect' when stop button was pushed



    // Change color to red when the difference of between elapsedTime and 5 sec much closer
    diff = elapsedTime - 5.0;
    //if(diff > -1.0 && diff < 1.0) // if diff was bigger than -1 and smaller than +1
    //or
    if(Math.abs(diff) < 1.0){ //if
      result.className = 'perfect';// add .(class)perfect to #(id)result
    }
  });
})();
