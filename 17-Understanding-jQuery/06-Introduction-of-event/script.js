(function($){
    $(function(){
        /*
        the event of jQuery should write code as below
            $(Selector).on(Event name, Event handler)
        
        - Event name must specify event name what you want to use by string type.
        - Event handler must have function you want to execute when the event has been activated.
        */
       $("#btn").on('click', function(){
            alert("Event has happened!");
       });
    });
})(jQuery);