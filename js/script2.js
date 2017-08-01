$(document).ready(function(){ //  When document has finished loading run the following
    $(".box").on("click", function(){
        //var _this = this; //- this is not needed. 
        /*
        ** When we click on an element that has
        ** a 'box' class, its color will turn red.
        */
        // 1. Get classes of element clicked
        var classNames = $(this).attr("class").split(" ");
        //All boxes having the same second class will turn red
        //$("." + classNames[1]).css("background-color", "red");

        //Make it toggle
        if ($(this).css("background-color") === "rgb(255, 0, 0)") {
            $("."+classNames[1]).css("background-color", "");
        }
        else {
            $(".box").css("background", ""); // turn others off
            $("."+classNames[1]).css("background-color", "red");
        }
        

    });
});