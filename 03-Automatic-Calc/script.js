(function(){
  'use strict';
  //Apply all id to define & activate in JS
  var price = document.getElementById('price');
  var num = document.getElementById('num');
  var unit = document.getElementById('unit');
  var btn = document.getElementById('button');
  var result = document.getElementById('result');
  var reset = document.getElementById('reset');

  function checkInput(){
    //use regular expressions
    //if you want to see from the first input to last input, wrap them by ^ and $.
    ///if you want to add[1-9], -> ^[1-9]$
    ///if you want to add[0-9] for many times, -> ^[0-9]*$ (* - for many times)
    // if input hasn't been as null
    if (price.value.match(/^[1-9][0-9]*$/) !== null && num.value.match(/^[1-9][0-9]*$/) !== null){
      btn.classList.remove('disabled');//remove class="disabled"
    } else {
      btn.classList.add('disabled');
    }
  }

  btn.addEventListener('click', function() {
    console.log('pushed btn');
    var payLess;
    var short;
    var payMore;
    var over;
    var str;//to show result

    //1 - Nothing will return if this button class has been containing 'disabled'
    if (this.classList.contains('disabled') === true){
      return;
    }

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
    //remove reset class when calculate has finished
    reset.classList.remove('hidden');
  });
  //2 - When input has been there, add keyup event to check whether that input has been correct
  price.addEventListener('keyup', checkInput);//checking for price
  num.addEventListener('keyup', checkInput);//checking for num
})();