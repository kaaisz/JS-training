(function($){
    $(document).ready(function(){
        ////Pt1 - Get element by id
        let $selectedId = [];

        //write selector here
        $selectedId = $("#one");

        //Add css to element which matched as ".bingo-id"(color will change to red)
        $selectedId.each(function(index){
            $(this).addClass("bingo-id");
        });
        $(".count-id").text($selectedId.length);

        ////Pt2 - Get element by class name
        let $selectedClass = [];
        //write selector here
        $selectedClass = $(".two");
        //Add css to element which matched as ".bingo-class"(color will change to pink)
        $selectedClass.each(function (index) {
            $(this).addClass("bingo-class");
        });
        $(".count-class").text($selectedClass.length);

        ////Pt3 - Get element by tag name
        let $selectedTag = [];
        //write selector here
        $selectedTag = $("a");
        //Add css to element which matched as ".bingo-class"(color will change to purple)
        $selectedTag.each(function (index) {
            $(this).addClass("bingo-tag");
        });
        $(".count-tag").text($selectedTag.length);

        ////Pt.4 - Get first child element of tag
        let $selected1stChildTag = [];
        //write child selector here
        $selected1stChildTag = $("li:first");
        //Add css to element which matched as ".bingo-class"(color will change to purple)
        $selected1stChildTag.each(function (index) {
            $(this).addClass("bingo-1stChildTag");
        });
        $(".count-1stChildTag").text($selected1stChildTag.length);

        ////Pt.5 - Get last child element of tag
        let $selectedLastChildTag = [];
        //write child selector here
        $selectedLastChildTag = $("li:last");
        //Add css to element which matched as ".bingo-class"(color will change to purple)
        $selectedLastChildTag.each(function (index) {
            $(this).addClass("bingo-lastChildTag");
        });
        $(".count-lastChildTag").text($selectedLastChildTag.length);

        ////Pt.6 - Get 2nd child element of tag
        let $selected2ndChildTag = [];
        //write child selector here
        $selected2ndChildTag = $("li:eq(1)");
        //Add css to element which matched as ".bingo-class"(color will change to purple)
        $selected2ndChildTag.each(function (index) {
            $(this).addClass("bingo-2ndChildTag");
        });
        $(".count-2ndChildTag").text($selected2ndChildTag.length);
    });
})(jQuery);