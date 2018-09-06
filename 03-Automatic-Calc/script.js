(function(){
  'use strict';
  //Apply all id to define & activate in JS
  var price = document.getElementById('price');
  var num = document.getElementById('num');
  var unit = document.getElementById('unit');
  var btn = document.getElementById('button');
  var result = document.getElementById('result');
  var reset = document.getElementById('reset');

  btn.addEventListener('click', function() {
    console.log('pushed btn');
    var payLess;
    var short;
    var payMore;
    var over;
    var str;//to show result

    //case A(不足) : paid 300JPY/Person (payLess)- 100JPY short(short)
    // payLess = 1000 / 3; //333.333...
    // payLess = 1000 / 3 / 100; //3.3333... 
    payLess = Math.floor(price.value / num.value / unit.value) * unit.value; //300
    short = price.value - (payLess * num.value); //100

    //case B(余り) : paid 400JPY/Person (payMore)- 200JPY over(over)
    payMore = Math.ceil(price.value / num.value / unit.value) * unit.value; //400
    over = price.value - (payMore * num.value); //-200

    //in case of divisible
    if(over === 0 && short === 0){
      //set in case of divisible
      str = 'Just ¥' + (price.value / num.value) + ' / per person.';
    }else{
      //set in case of indivisible
      //set results for each case
      str = 'If the price was ¥' + payLess + ' / person, paybill will short ¥' + short + ', ' +
        'If the price was ¥' + payMore + ' / person, paybill will over ¥' + over + '.';
    }

    //show the result
    result.textContent = str;
  });
})();