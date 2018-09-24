(function($){
    //when entire page has loaded, excuse function
    $(document).ready(function(){
        //Pt.1 - Hide specified elements
        $("#btn-hide").click(function(){//processing starts when #btn-hide has been clicked
            //add action for when it has been clicked
            $(".elem-hide").hide();
        });

        //Pt.2 - Show specified elements
        $("#btn-show").click(function () {//processing starts when #btn-show has been clicked
            //add action for when it has been clicked(when it has disappeared)
            $(".elem-hide").show();
        });

        //Pt.3 - toggle - switch hide/show specified elements
        $("#elem-toggle").hide();//hide firstly to show properly when it has been clicked
        $("#btn-toggle").click(function(){
            $("#elem-toggle").toggle();
        });
    });
})(jQuery);