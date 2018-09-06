(function(){
    'use strict';
    var slider = document.getElementById('slider');
    var label = document.getElementById('label');
    var btn = document.getElementById('btn');
    var result = document.getElementById('result');

    function getPassword(){
        var seed = 'abcdefghijklmnopqrstuvwxyz';//default setting
        var length = slider.value;//how many numbers are required to password
        var password = '';

        //generate password randomly until numbers of slider.value ends
        // for(var i = 0; i < length; i++){
        //     password += seed[Math.floor(Math.random()*seed.length)];//to generate number randomly
        // }

        //another way - use while expression
        while(length--){//until length ends
            password += seed[Math.floor(Math.random() * seed.length)];
        }

        // result.value = 'asdfuikew';//dummy
        result.value = password;
    }

    slider.addEventListener('change', function () {//when the number changed, this function starts
        label.innerHTML = this.value;
    });

    btn.addEventListener('click', function () {//when button has been clicked, this function starts
        getPassword();
        // result.value = 'asdfuikew';//when button has been clicked, this value has been shown.
    });

    result.addEventListener('click', function () {//when result input has been clicked
        this.select();//at the same time with the result shows, result has been seleced.
    });

    getPassword();//to get password from first loading 
})();

