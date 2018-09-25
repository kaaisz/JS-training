(function($){
    //Pt.1 - understanding fundamental of event
    $(function(){
        /*
        the event of jQuery should write code as below
            $(Selector).on(Event name, Event handler)
        
        - Event name must specify event name what you want to use by string type.
        - Event handler must have function you want to execute when the event has been activated.

        also, you can use like this when add ready event
            $(function () { ... });
            $(document).ready(function () { ... });
            $().ready(function () { ... });
        */
       $("#btn").on('click', function(){
            alert("Event has happened!");
       });

    });

    //Pt.2 - Understanding how to declare event
    function logEvent(log){
        $("#log1").append($("<li />").text(log + "has happened."));
    }
    
    $(function(){
        logEvent("$(function(){...})");
    });
    $(document).ready(function(){
        logEvent("$(document).ready(function(){...})");
    });
    $().ready(function(){
        logEvent('$().ready(function(){...})');
    });
})(jQuery);