(function($){
    //when entire page has loaded, excuse function
    $(document).ready(function(){
        //Pt.1
        //if you'd like to use get id name of specified element, you can use "attr("id") behind element.
        // var id_name = $("p").attr("id");
        
        //if you'd like to change the attr name, rewrite the code like this below
        var id_name = $("p:first").attr("id", "bar");
        $("#result").html(id_name.attr("id"));

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

        //Pt.4
        //If you'd like to replace the word in any specified elements, you can write code like below
        $(".replace").each(function(){
            $(this).html("Hello World");
            //only ".replace" will change from "This is p element" to "Hello World"
        });

        //Pt.5
        //Add "on" class on p element to add background color
        $("#hello-pt5-1").addClass("on");
        $("#hello-pt5-2").addClass("on");
        //Remove "on" class
        $("#hello-pt5-2").removeClass("on");

        //Pt.6
        //Add toggle class on p element to switch condition of background
        $("#hello-pt6-1").toggleClass("on");//remove class "on"
        $("#hello-pt6-2").toggleClass("on");//add class "on"
    });
})(jQuery);