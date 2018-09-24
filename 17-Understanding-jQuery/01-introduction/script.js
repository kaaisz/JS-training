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

            var hello = document.getElementById("hello");
            hello.style.backgroundColor="#9f9";

        2 - using jQuery

            (see the code below)

        */
        var hello = $("#hello");
        hello.css("backgroundColor", "#9f9");

        //as you did last paragraph, you can also choose class like using "getElementsByClassName"
        var elem = $(".elems");
        elem.each(function(){
            $(this).css("backgroundColor", "#0bf")
        })
    });
})(jQuery);