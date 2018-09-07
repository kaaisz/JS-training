(function () {
    'use strict';
    var timer = document.getElementById('timer');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');

    var startTime;
    var elapsedTime = 0;//time passed

    function countUp(){
        setTimeout(function(){
            elapsedTime = Date.now() - startTime;
            //debug
            console.log(elapsedTime);
            countUp();
        }, 10);//to activate after 10 sec -> this function will be active per 10 min while the start button is active
    }

    //To make a function for countup, it should subtract from current time to which start button has pushed.
    //(カウントアップをするには、一定時間ごとに現在時刻から Start を押したときの時刻を引けばよい)
    start.addEventListener('click', function(){
        //Substitute Date.now() to startTime.(Date.now() is for showing current time)
        startTime = Date.now();
        countUp();//see the function above
    });
})();