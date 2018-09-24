/*
jQuery has some of way to declare itself
1 - 
    jQuery(document).ready(function(){
        //write code here
    });

2 -
    $(function(){
        //write code here
    });

3 - 
    (see the code below)
*/

(function($){
    //when entire page has loaded, excuse function
    $(document).ready(function(){
        /*you can choose the way of writing code below
        1 - using Javascript

            var elem = document.getElementById("hello");
            elem.style.backgroundColor="#9f9";

        2 - using jQuery

            (see the code below)
            
        */
        var elem = $("#hello");
        elem.css("backgroundColor", "#9f9");
    });
})(jQuery);