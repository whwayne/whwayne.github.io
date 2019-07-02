
function aniChange(){
    const textElem = document.getElementById("textarea");
    const aniSelectElem = document.getElementById("animation");
    var index = aniSelectElem.selectedIndex;
    switch(index) {
        case (1): 
            textElem.value = EXERCISE;
            //alert(index);
            break;
        case (2): 
            textElem.value = JUGGLER;
            break;
        case (3): 
            textElem.value = BIKE;
            break;
        case (4): 
            textElem.value = DIVE;
            break;
    }
}

function attachHandler(){
    var aniSelect = document.getElementById("animation");
    aniSelect.onchange = aniChange;
}
window.onload = attachHandler;

