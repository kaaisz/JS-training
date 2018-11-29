(function(){
    'use strict';
    var comment = document.getElementById('comment');
    var label = document.getElementById('label');
    var LIMIT = 30;//to set maximum character to type under 30. 
    //LIMIT(uppercase) is for constant = fixed number
    var WARNING = 10;//show the alert color when remaining character has been less than 10
    
    label.innerHTML = LIMIT;

    comment.addEventListener('keyup', function (){//set NOT keydown but keyup.(because event would be active while you're pushing key for all time)
        //insert remaining calculated character to label
        var remaining = LIMIT - this.value.length;
        label.innerHTML = remaining;

        if(remaining < WARNING){//if the numbers of remaining became smaller than numbers of WARNING characters
            label.className = 'warning';//add class "warning"
        }else{
            label.className = ''//any class doesn't add
        }
        //or if you wanna shorten - with using ternary operators:
        label.className = remaining < WARNING ? 'warning' : ''
        //(if remaining < WARNING was true, label.className = 'warning', if not, '')

    });
})();