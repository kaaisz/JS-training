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
            $(this).css("backgroundColor", "#0bf");
        });

        //also you can choose tag like using "getElementsByTagName"
        var elem2 = $("span");
        elem2.each(function(){
            $(this).css("backgroundColor", "#F80");
        });

        //So, if you want to choose first, last or some other numbers of child class of the tag, do like this
        var elem3 = $("li:first");//equals li:first-child
        elem3.css("backgroundColor", "#f0f");

        var elem4 = $("li:eq(1)");//equals li:nth-child(2) *numbers of eq starts from "0(0, 1, 2)".
        elem4.css("backgroundColor", "#e8e");

        var elem5 = $("li:last");//equals li:last-child
        elem5.css("backgroundColor", "#b5d");
    });
})(jQuery);