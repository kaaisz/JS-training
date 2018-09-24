(function($){
    //when entire page has loaded, excuse function
    $(document).ready(function(){
        //Pt.1 - Start processing when it has been clicked
        $("#elem").click(function(){//processing starts when #elem has been clicked
            //count numbers of time of it clicked
            $("#result").html(parseInt($("#result").html())+1);
        });
    });
})(jQuery);