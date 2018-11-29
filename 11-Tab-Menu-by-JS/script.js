(function(){
    'use strict';

    var menuItems = document.getElementsByClassName('menu_item');
    var contents = document.getElementsByClassName('content');
    var i;

    for(i = 0; i < menuItems.length; i++){//as long as there's a menu, do the action below
        ///add event for each menu
        menuItems[i].addEventListener('click', function(e){
            //Set to disabled jumping to link address
            e.preventDefault();//preventDefault = cancel event

            //control active class
            var i;//!!this is not the same with other 'i' above
            for(i = 0; i < menuItems.length; i++){
                ///once change to 'menu_item for all class when the event has activated
                menuItems[i].className = 'menu_item';
            }
            //only <a> class which clicked, it'll be active.
            //(because event has been set on only <a href="#" class="menu_item">...</a>)
            this.className = 'menu_item active';

            for(i = 0; i < contents.length; i++){
                contents[i].className = 'content';
            }

            document.getElementById(this.dataset.id).className = 'content active';
            //details of 'data-id' can pick up by "this.dataset.id".
        });
    }
})();