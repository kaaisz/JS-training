(function($){
    //when entire page has loaded, excuse function
    $(document).ready(function(){
        //Pt.1
        //if you'd like to use get id name of specified element, you can use "attr("id") behind element.
        // var id_name = $("p").attr("id");
        
        //if you'd like to change the attr name, rewrite the code like this below
        var id_name = $("p:first").attr("id", "bar");

        $("#result").html(id_name.attr("id"));
    });

    $(document).ready(function(){
        //Pt.2
        //get element of first <div>
        var contents = $("div:first").html();
        //if you'd like to change the content of element, write like this below
        $("div:eq(1)").html(contents);

        //Pt.3
        //If you'd like to count the number of elements
        // you can count quantity of elements by using .length behind element
        var num = $(".count").length;
        $("#result2").html(num);
    });
})(jQuery);