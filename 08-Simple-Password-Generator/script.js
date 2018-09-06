(function(){
    'use strict';
    var slider = document.getElementById('slider');
    var label = document.getElementById('label');
    var btn = document.getElementById('btn');
    var result = document.getElementById('result');

    function getPassword(){
        result.value = 'asdfuikew';
    }

    slider.addEventListener('change', function () {//when the number changed, this function starts
        label.innerHTML = this.value;
    });

    btn.addEventListener('click', function () {//when button has been clicked, this function starts
        getPassword();//function
        // result.value = 'asdfuikew';//when button has been clicked, this value has been shown.
    });

    result.addEventListener('click', function () {//when result input has been clicked
        this.select();//at the same time with the result shows, result has been seleced.
    });

    getPassword();
})();

