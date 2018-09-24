(function($){
    //when entire page has loaded, excuse function
    $(document).ready(function(){
        //Pt.1 - Hide specified elements
        $("#btn-hide").click(function(){//processing starts when #btn-hide has been clicked
            //add action for when it has been clicked
            $("#elem-hide").hide();
        });
    });
})(jQuery);