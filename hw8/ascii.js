
function aniChange(){
    const textElem = document.getElementById("textarea");
    const aniSelectElem = document.getElementById("animation");
    var index = aniSelectElem.selectedIndex;
    switch(index) {
        case (1): 
            textElem.value = ANIMATIONS["EXERCISE"];
            break;
        case (2): 
            textElem.value = ANIMATIONS["JUGGLER"];
            break;
        case (3): 
            textElem.value = ANIMATIONS["BIKE"];
            break;
        case (4): 
            textElem.value = ANIMATIONS["DIVE"];
            break;
    }
}

function sizeChange(){
    const textElem = document.getElementById("textarea");
    const sizeSelectElem = document.getElementById("size");
    var index = sizeSelectElem.selectedIndex;
    switch(index) {
        case (0): 
            textElem.style.fontSize = "7pt";
            break;
        case (1): 
            textElem.style.fontSize = "10pt";
            break;
        case (2): 
            textElem.style.fontSize = "12pt";
            break;
        case (3): 
            textElem.style.fontSize = "16pt";
            break;
        case (4): 
            textElem.style.fontSize = "24pt";
            break;
        case (5): 
            textElem.style.fontSize = "32pt";
            break;
        
    }
}

var id;
var i = 0;
var splitStr;
var interval = 250;



function startClick() {
    const textElem = document.getElementById("textarea");
    const aniSelectElem = document.getElementById("animation");
    var option = aniSelectElem[aniSelectElem.selectedIndex].value.toUpperCase();
    console.log(option);
    const str = ANIMATIONS[option];
    splitStr = str.split("=====\n");

    id = setInterval(animationStart, interval);
}

function animationStart(){
    const textElem = document.getElementById("textarea");
    textElem.value = splitStr[i++];
    console.log(textElem.value);
    if (i == splitStr.length) i = 0;
}

function stopClick() {
    clearInterval(id);
}

function ckBoxChange(){
    const cbx = document.getElementById("ckbox");
  //  cbx.checked? interval = 50 : interval = 250;
    if(cbx.checked) {
      interval = 50;
    } else {
     interval = 250;
    }
 }
 




function attachHandler(){
    var aniSelect = document.getElementById("animation");
    aniSelect.onchange = aniChange;

    var sizeSelect = document.getElementById("size");
    sizeSelect.onchange = sizeChange;

    var startBtn = document.getElementById("start");
    startBtn.onclick = startClick;

    var stoptBtn = document.getElementById("stop");
    stoptBtn.onclick = stopClick;

    var ckBox = document.getElementById("ckbox");
    ckBox.onchange = ckBoxChange;

    
}
window.onload = attachHandler;

