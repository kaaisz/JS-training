(function(){
    'use strict';
    var slider = document.getElementById('slider');
    var label = document.getElementById('label');

    slider.addEventListener('change', function () {//when the number changed, this function starts
        label.innerHTML = this.value;
    });
})();

