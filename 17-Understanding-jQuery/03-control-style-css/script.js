(function($){
    //when entire page has loaded, excuse function
    $(document).ready(function(){
        var result = $("#element1").height();//define variable result as "height of #element"
        $("#result1").html(result);
    });
})(jQuery);