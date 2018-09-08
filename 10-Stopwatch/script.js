(function() {
    'use strict';
    var timer = document.getElementById('timer');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');

    var startTime;
    var elapsedTime = 0;//time passed. initialise as 0
    var timerId;//to pass the id for clearTimeout
    var timeToAdd = 0;

    function updateTimerText(){
        //eg : 132.5 sec -> 135200msec -> 02:15.200 elapsed
        // m = 135200 / 60000
        // sec = 135200 % 60000 / 1000
        // msec = 135200 % 1000
        var m = Math.floor(elapsedTime / 60000);
        var sec = Math.floor(elapsedTime % 60000 / 1000);
        var msec = elapsedTime % 1000;

        //to fix the number of digits
        //eg : 3min or 12min -> '03' or '12' min
        //JS has a property that's change to character even from 2 numbers of digits
        //(JSには文字を連結させると文字列になるという性質がある)
        // 3 -> '0' + 3 => '03' / 12 -> '0' + 12 => '012'
        //=> So, we can get 2 digits by combining 0 and 2 numbers of digits by using slice(-2) to minus digits
        //(よって、0の文字列を連結し、そのあとに文字列の末尾2桁を"slice(-2)"で負の値を引数に渡すことで取得する)
        m = ('0' + m).slice(-2);
        sec = ('0' + sec).slice(-2);
        msec = ('00' + msec).slice(-3);//because of only msec has 3 digits

        //show the output on HTML
        timer.textContent = m + ':' + sec + '.' + msec;
    }

    function countUp(){
        timerId = setTimeout(function(){//timerId will be the return value of setTimeout
            elapsedTime = Date.now() - startTime + timeToAdd;
            //debug
            // console.log(elapsedTime);
            updateTimerText();//to show the output on HTML
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

    stop.addEventListener('click', function () {
        clearTimeout(timerId);
        //Needs to add time which timer has been working until just before to the condition above
        //(上記の式に対して過去にタイマーが動いていた時間を足し上げる必要がある)
        timeToAdd += Date.now() - startTime;
    });

    //when push the reset button, timer goes back to 0
    reset.addEventListener('click', function () {
        elapsedTime = 0;
        timeToAdd = 0;//timeToAdd will also reset
        updateTimerText();//to show the output on HTML again
    });
})();