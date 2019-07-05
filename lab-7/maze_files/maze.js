$(function(){
    $('[class=boundary]').mouseover(function(){
        $(this).addClass("youlose");
    });

    $("#end").click(function(){
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
        $('[class=boundary]').removeClass("youlose");

       
    });

    $("#maze").mouseout(function(){
        $('[class=boundary]').addClass("youlose");
        $("h2").text("Sorry you lost. :[");
    });
    



});

