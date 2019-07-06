$(function(){

   // var puzzleArea = document.getElementById('puzzlearea');
   $('[class=boundary]').mouseover(function(){
    $('[class=boundary]').addClass("youlose");
   // $("h2").text("Sorry you lost. :[");
   });

   $("#end").mousemove(function(){
    if(($("#boundary1").hasClass("youlose"))||($("#boundary2").hasClass("youlose"))||
    ($("#boundary3").hasClass("youlose"))||($("#boundary4").hasClass("youlose"))||
    ($("#boundary5").hasClass("youlose"))){
    // alert("Sorry you lost. :[");
    $("h2").text("Sorry you lost. :[");
        } else {
            // alert("You win! :]");
            $("h2").text("You win! :]");
        }
   });

   $("#start").click(function(){
       /*
       var a = $('[class=boundary]');
       for (var i=0; i< a.length; i++) {
           a[i].removeClass("youlose");
       }
       */
     
    $("#boundary1").removeClass("youlose");
    $("#boundary2").removeClass("youlose");
    $("#boundary3").removeClass("youlose");
    $("#boundary4").removeClass("youlose");
    $("#boundary5").removeClass("youlose"); 

    $("h2").text("Click the \"S\" to begin.");

    $(this).trigger(mouseleave,$("#maze"));
    
});

    $("#maze").mouseleave(function(){
        $('[class=boundary]').addClass("youlose");
        $("h2").text("Sorry you lost. :[");
    });





/*
    $('[class=boundary]').mouseover(function(){
        $(this).addClass("youlose");
        $("h2").text("Sorry you lost. :[");
    });

    $("#end").mousemove(function(){
        if(($("#boundary1").hasClass("youlose"))||($("#boundary2").hasClass("youlose"))||
           ($("#boundary3").hasClass("youlose"))||($("#boundary4").hasClass("youlose"))||
           ($("#boundary5").hasClass("youlose"))){
           // alert("Sorry you lost. :[");
           $("h2").text("Sorry you lost. :[");
        } else {
           // alert("You win! :]");
           $("h2").text("You win! :]");
        }
  
    });

    $("#start").click(function(){
        $('[class=boundary]').removeClass("youlose")
        css("background-color", "blue");

       
    });



    $("#maze").mousemove(function(){
        $('[class=boundary]').addClass("youlose");
        $("h2").text("Sorry you lost. :[");
    });
    */
    



});

