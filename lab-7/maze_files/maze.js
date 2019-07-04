$(function(){
    $("#boundary1").mouseover = (outBoundary1);
});

function outBoundary1(evt) {
    $("#boundary1").addClass("youlose");
}