
function aniChange(){
    const textElem = document.getElementById("textarea");
    const aniSelectElem = document.getElementById("animation");
    var index = aniSelectElem.selectIndex;
    switch(index) {
        case ("1"): 
            textElem.innerHTML = EXERCISE;
            alert(index);
            break;
        case ("2"): 
            textElem.innerHTML = JUGGLER;
            break;
        case ("3"): 
            textElem.innerHTML = BIKE;
            break;
        case ("4"): 
            textElem.innerHTML = DIVE;
            break;
    }
}

function attachHandler(){
    var aniSelect = document.getElementById("animation");
    aniSelect.onchange = aniChange;
}
window.onload = attachHandler;

