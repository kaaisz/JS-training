(function(){
  'use strict';
  //Apply all id to define & activate in JS
  var price = document.getElementById('price');
  var num = document.getElementById('num');
  var unit = document.getElementById('unit');
  var button = document.getElementById('button');
  var result = document.getElementById('result');
  var reset = document.getElementById('reset');

  btn.addEventListener('click', function(){
    //case A(不足) : paid 300JPY/Person (payLess)- 100JPY short(short)
    // payLess = 1000 / 3; //333.333...
    // payLess = 1000 / 3 / 100 //3.3333... 
    payLess = Math.floor(1000 / 3 / 100) * 100; //300
    short = 1000 - (300 * 3); //100

    //case B(余り) : paid 400JPY/Person (payMore)- 200JPY over(over)
    payMore = Math.ceil(1000 / 3 / 100) * 100; //400
    over = 1000 - (400 * 3); //-200
  });
})();