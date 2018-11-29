(function(){
    'use strict';

    //get element which added id
    var open = document.getElementById('open');
    var close = document.getElementById('close');
    var modal = document.getElementById('modal');
    var mask = document.getElementById('mask');

    //set click event
    //when open button has been clicked
    open.addEventListener('click', function(){
        //add each className to blank (= removeclass)
        modal.className = '';
        mask.className = '';
    });

    //when close button has been clicked
    close.addEventListener('click', function(){
        //add each className to hidden
        modal.className = 'hidden';
        mask.className = 'hidden';
        //same things happen below
        // close.click();
    });

})();