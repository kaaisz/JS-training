(function(){
    'use strict';
    var comment = document.getElementById('comment');
    var label = document.getElementById('label');
    var LIMIT = 30;//to set maximum character to type under 30. 
    //LIMIT(uppercase) is for constant = fixed number
    
    label.innerHTML = LIMIT;

    comment.addEventListener('keyup', function (){//set NOT keydown but keyup.(because event would be active while you're pushing key for all time)
        //insert remaining calculated character to label
        var remaining = LIMIT - this.value.length;
        label.innerHTML = remaining;
    });
})();