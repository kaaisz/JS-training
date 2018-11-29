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
        $("#log-event").append($("<li />").text(log + "has happened."));
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

    //Pt.3 - Understanding the structure of event
    $(function(){
        function log(text){
            $("#log-structure").append("<li/>").text(text);
        }
        $("#btn-structure").on('click', function(event){
            $("#log-structure").empty();
            log('currentTarget = ' + event.currentTarget);//currentTarget - element which is clicked
            log('target        = ' + event.target);//target - element which specified for event handler
            log('pageX         = ' + event.pageX);//pageX - X coordinate which clicked of the entire page
            log('pageY         = ' + event.pageY);//pageY - Y coordinate which clicked of the entire page
            log('altKey        = ' + event.altKey);//altKey - for checking condition whether altkey has pushed when clicked button
        });
    });

    //Pt.4 - Set event handler which activates only once
    $(function(){
        $("#btn-one").one('click', function(){
            alert("Button has been clicked!");
        });
    });

    //Pt.5 - Set event to selector itself
    $(function () {
        function logEvent (event){
            $("#log-active").prepend($("<li/>").text(event.type + ' has happened'));
        }
        $(document).on('click', '#btn-active:not(.active)', function(event){
            logEvent(event);
            $(event.target).addClass('active');
        });
        $(document).on('click', '#btn-active.active', function(event){
            logEvent(event);
            $(event.target).removeClass('active');
        });
    });

    //Pt.6 - Activate event on jQuery
    $(function(){
        $("#btn-trigger").on('click', function(){
            alert("Button has been clicked!")
        });
        //This is the point for how to activate event on jQuery
        //*This code will immediately load when this page has loaded.
        $("#btn-trigger").trigger('click');
    });
})(jQuery);