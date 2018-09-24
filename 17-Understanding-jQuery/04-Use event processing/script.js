(function($){
    //when entire page has loaded, excuse function
    $(document).ready(function(){
        //Pt.1 - Start processing when it has been clicked
        $("#elem-click").click(function(){//processing starts when #elem has been clicked
            //count numbers of time of it clicked
            $("#result-click").html(parseInt($("#result-click").html())+1);
        });

        //Pt.2 - Start processing when mouse has hovered on the element
        $("#elem-hover").hover(function(){
            //count numbers of time of it hovered
            $("#result-hover").html(parseInt($("#result-hover").html()) + 1);
        });

        //Pt.3 - Start processing when mouse was on the element
        $("#elem-mouseover").hover(function () {
            //count numbers of time of when it mouseovered
            $("#result-mouseover").html(parseInt($("#result-mouseover").html()) + 1);
        });
    });
})(jQuery);