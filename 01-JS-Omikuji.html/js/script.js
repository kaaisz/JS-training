(function(){
    'use strict'; //defact standard

    var btn = document.getElementById('btn');

    ////change txt to "hit!" when push button
    // btn.addEventListener('click', function(){
    //     this.textContent = 'hit!';
    // });

    //make random number(凶・小吉・中吉・大吉)
    //base...if you want to be able to see random number 0, 1, 2
    //We have to add "Math.random() * 3" + Math.floor to truncate fraction(端数を切り捨てる)
    // = "Math.floor(Math.random()*3);" <- 3 = 2+1
    //so, if you want to be able to see random number 0,1,2...n
    //add, "Math.floor(Math.random()*(n+1));"

    btn.addEventListener('click', function(){
        ////1. a case of structure using array
        // var results = ['大吉', '中吉', '凶', '小吉'];
        // // this way of writing must be able to complicated if add big amount of array
        // // "var n = Math.floor(Math.random()*4);"
        // // so, we can make it more flexible even if add big amount of array!
        // var n = Math.floor(Math.random()*results.length);
        // this.textContent = results[n];

        ////2. a case of if structure
        // if (n === 0) {
        //     this.textContent = "大吉";
        // }else if(n === 1){
        //     this.textContent = "中吉";
        // }else{
        //   this.textContent = "凶";
        // }

        ////3. a case of switch stucture
        // switch (n) {
        //     case 0:
        //         this.textContent = '大吉';
        //         break;
        //     case 1:
        //         this.textContent = '中吉';
        //         break;
        //     default:
        //         this.textContent = '凶';
        //         break;
        // }
        // this.textContent = n;

        //4. Manipurate probabilities
        var n = Math.random();
        if (n<0.05){
            this.textContent = '大吉'//5%
        }else if(n < 0.2){//5%より大きいが20%より小さい
            this.textContent = '中吉'//15%
        }else{
          this.textContent = '凶'//last 80%
        }

    });

    //add buttonlike css animation
    btn.addEventListener('mousedown', function(){
        this.className = 'pushed';
    });

    btn.addEventListener('mouseup', function(){
        this.className = '';
    });
})();
