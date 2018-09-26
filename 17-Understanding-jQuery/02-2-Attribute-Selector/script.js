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


        ////Pt4 - Get element which is matching with specified keyword of attribute name
        let $selectedSpecifiedKeyWordAttr = [];

        //write selector here
        $selectedSpecifiedKeyWordAttr = $("[data-fruit ^= 'P']");

        //Add css to element which matched as ".bingo-id"(color will change to red)
        $selectedSpecifiedKeyWordAttr.each(function (index) {
            $(this).addClass("bingo-SpecifiedAttrName");
        });
        $(".count-SpecifiedKeyWordAttr").text($selectedSpecifiedKeyWordAttr.length);


        ////Pt5 - Get element which is matching with specified keyword of attribute name
        let $selectedAttrKeyWordIncl = [];

        //write selector here
        $selectedAttrKeyWordIncl = $("[data-curry *= 'e']");

        //Add css to element which matched as ".bingo-id"(color will change to red)
        $selectedAttrKeyWordIncl.each(function (index) {
            $(this).addClass("bingo-SpecifiedAttrName");
        });
        $(".count-selectedAttrKeyWordIncl").text($selectedAttrKeyWordIncl.length);


        ////Pt6 - Specify multiple attribute to get element
        let $selectedAttrKeyWord = [];

        $selectedAttrKeyWord = $("[data-city='Vancouver'][Province='BC']");

        $selectedAttrKeyWord.each(function (index) {
            $(this).addClass("bingo-SpecifiedAttrName");
        });
        $(".count-selectedAttrKeyWord").text($selectedAttrKeyWord.length);
    });
})(jQuery);