(function ($) {
    $(document).ready(function () {
        ////Pt1 - Get element by using attribute name
        let $selectedAttrName = [];

        //write selector here
        $selectedAttrName = $("[data-name]");

        //Add css to element which matched as ".bingo-id"(color will change to red)
        $selectedAttrName.each(function (index) {
            $(this).addClass("bingo-AttrName");
        });
        $(".count-AttrName").text($selectedAttrName.length);

        
        ////Pt2 - Get element which matching with specified attribute name
        let $selectedSpecifiedAttrName = [];

        //write selector here
        $selectedSpecifiedAttrName = $("[data-age=81]");

        //Add css to element which matched as ".bingo-id"(color will change to red)
        $selectedSpecifiedAttrName.each(function (index) {
            $(this).addClass("bingo-SpecifiedAttrName");
        });
        $(".count-SpecifiedAttrName").text($selectedSpecifiedAttrName.length);

        ////Pt3 - Get element which isn't matching with specified attribute name
        let $selectedNotSpecifiedAttrName = [];

        //write selector here
        $selectedNotSpecifiedAttrName = $("[data-japanese!='Miso Ramen']");

        //Add css to element which matched as ".bingo-id"(color will change to red)
        $selectedNotSpecifiedAttrName.each(function (index) {
            $(this).addClass("bingo-NotSpecifiedAttrName");
        });
        $(".count-NotSpecifiedAttrName").text($selectedNotSpecifiedAttrName.length);
    });
})(jQuery);