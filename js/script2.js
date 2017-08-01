$(document).ready(function(){ //  When document has finished loading run the following
    $(".box").on("click", function(){
        /*
        ** When we click on an element that has
        ** a 'box' class, its color will turn red.
        */
        // 1. Get classes of element clicked
        var classNames = $(this).attr("class").split(" ");
        //All boxes having the same second class will turn red
        $("." + classNames[1]).css("background-color", "red");
    });
});