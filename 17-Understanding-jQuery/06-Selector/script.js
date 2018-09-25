(function($){
    $(document).ready(function(){
        //Pt1 - Get element by id
        let $selectedId = [];

        //write selector here
        $selectedId = $("#one");

        //Add css to element which matched as ".bingo-id"(color will change to red)
        $selectedId.each(function(index){
            $(this).addClass("bingo-id");
        });
        $(".count-id").text($selectedId.length);

        //Pt2 - Get element by class name
        let $selectedClass = [];

        //write selector here
        $selectedClass = $(".two");

        //Add css to element which matched as ".bingo-class"(color will change to pink)
        $selectedClass.each(function (index) {
            $(this).addClass("bingo-class");
        });
        $(".count-class").text($selectedClass.length);

        //Pt3 - Get element by tag name
        let $selectedTag = [];

        //write selector here
        $selectedTag = $("a");

        //Add css to element which matched as ".bingo-class"(color will change to pink)
        $selectedTag.each(function (index) {
            $(this).addClass("bingo-tag");
        });
        $(".count-tag").text($selectedTag.length);
    });
})(jQuery);