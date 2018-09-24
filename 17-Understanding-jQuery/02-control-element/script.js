(function($){
    //when entire page has loaded, excuse function
    $(document).ready(function(){
        //if you'd like to use get id name of specified element, you can use "attr("id") behind element.
        // var id_name = $("p").attr("id");
        
        //if you'd like to change the attr name, rewrite the code like this below
        var id_name = $("p:first").attr("id", "bar");

        $("#result").html(id_name.attr("id"));
    });
})(jQuery);