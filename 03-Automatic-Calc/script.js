(function(){
  'use strict';

  //Apply all id to define & activate in JS
  var price = documemnt.getElementById('price');
  var num = document.getElementById('num');
  var unit = documemnt.getElementById('unit');
  var btn = documemnt.getElementById('btn');
  var result = documemnt.getElementById('result');
  var reset = documemnt.getElementById('reset');

  btn.addEventListener('click', function(){
    var payless;
    var short;
    var payMore;
    var over;
    var str;//see the result as string

    //add calculation for spiliting bills evenly

    //A. 300(payless) ... 100(short)
    //payless = 1000 / 3; -> Ans: 333.333...
    //payless = 1000 / 3 / 100; -> Ans: 3.333...(decimal point is moving up)
    payless = Math.floor(1000 / 3 / 100) * 100; //3*100(unit for spliting bills) -> payless : 300
    //payless = Math.floor(price.value / num.value / unit.value) * unit.value; //3*100(unit for spliting bills) -> payless : 300
    short = 1000 - (300 * 3); //short : 100
    //short = price.value - (payless * num.value); //short : 100

    //B. 400(paymore) ... 200(over)
    payMore = Math.ceil(1000 / 3 / 100) * 100; //4*100(unit for spliting bills) -> payless : 400
    //payMore = Math.ceil(price.value / num.value / unit.value) * unit.value; //4*100(unit for spliting bills) -> payless : 400
    over = Math.abs(1000 - (400 * 3)); //over : 200
    //over = Math.abs(price.value - (paymore * num.value)); //over : 200
    str = 'If the price was ¥' + payless + ' /person, paybill will short ¥' + short + ',' +
          'If the price was ¥' + payMore + ' /person, paybill will over ¥' + over + '.';
    result.textContent = str;

  });
})();
