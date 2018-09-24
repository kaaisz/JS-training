(function($){
    //when entire page has loaded, excuse function
    $(document).ready(function(){
        //if you'd like to use get id name of specified element, you can use "attr("id") behind element."
        var id_name = $("p").attr("id");
        $("#result").html(id_name);
    });
})(jQuery);