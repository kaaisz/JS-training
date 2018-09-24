(function($){
    //when entire page has loaded, excuse function
    $(document).ready(function(){
        //Pt.1 - Understanding how to show the style of element
        var result = $("#element1").height();//define variable result as "height of #element"
        $("#result1").html(result);

        //Pt.2 - Understanding how to change the style of element
        $("#element2").height("100px");
    });
})(jQuery);