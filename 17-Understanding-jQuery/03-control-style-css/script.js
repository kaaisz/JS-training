(function($){
    //when entire page has loaded, excuse function
    $(document).ready(function(){
        //Pt.1 - Understanding how to show the style of element
        var result = $("#element1").height();//define variable result as "height of #element"
        $("#result1").html(result);

        //Pt.2 - Understanding how to change the style of element
        $("#element2").height("100px");

        //Pt.3 - Understanding how to Get width of element
        var result3 = $("#element3").width();//define variable result as "height of #element"
        $("#result3").html(result3);

        //Pt.4 - Understanding how to change the style of element
        $("#element5").width("100px");

        //Pt.5 - Understanding how to get background of element
        var result6 = $("#element6").css("background-color");
        $("#result6").html(result6);
    });
})(jQuery);