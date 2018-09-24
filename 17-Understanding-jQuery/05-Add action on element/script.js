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

        //Pt.4 - fadeout specified elements
        $("#btn-fadeOut").click(function(){
            $("#elem-fadeOut").fadeOut();
        });

        //Pt.5 - fadein specified elements
        $("#elem-fadeIn").hide();//hide firstly to show properly when it has been clicked
        $("#btn-fadeIn").click(function(){
            $("#elem-fadeIn").fadeIn();
        });

        //Pt.6 - slide up specified elements
        $("#btn-slideUp").click(function () {
            $("#elem-slideUp").slideUp();
        });

        //Pt.7 - slide down specified elements
        $("#elem-slideDown").hide();//hide firstly to show properly when it has been clicked
        $("#btn-slideDown").click(function () {
            $("#elem-slideDown").slideDown();
        });
    });
})(jQuery);