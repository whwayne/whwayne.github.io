var oneClick = true;
var id;


function bigClick() {
  if(oneClick){
    //  oneClick = false;
       id = setInterval(styleChange, 500);
  } else {
      clearInterval(id);
      oneClick = true;
  }
}

function styleChange(){
    const textElem = document.getElementById("textarea");
    let curFontSize = getComputedStyle(textElem).fontSize;
    textElem.style.fontSize = parseInt(curFontSize) + 2 + "px";
    oneClick = false;
}

function playClick(){
    const textElem = document.getElementById("textarea");
   // alert(textElem.innerHTML);
    let str = textElem.innerHTML.trim().split(" ");
    textElem.innerHTML = "";
    let newStr = "";
    for(const s in str) {
       newStr += (pigLatin(s) + " ");
    }
    textElem.innerHTML = newStr;
}

function pigLatin(str) {
    // Convert string to lowercase
    str = str.toLowerCase()
    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;
  
    if (vowels.includes(str[0])) {
      // If first letter is a vowel
      return str + "way";
    } else {
      // If the first letter isn't a vowel i.e is a consonant
      for (let char of str) {
        // Loop through until the first vowel is found
        if (vowels.includes(char)) {
          // Store the index at which the first vowel exists
          vowelIndex = str.indexOf(char);
          break;
        }
      }
      // Compose final string
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
  }


function ckBoxChange(){
   //  alert("Hello, world!");
   const cbx = document.getElementById("ckbox");
   const textElem = document.getElementById("textarea");

   if(cbx.checked) {
     // textElem.style.fontWeight = "Bold";
      textElem.style.color = "green";
      textElem.style.fontWeight = "Bold";
      textElem.style.textDecoration = "Underline";
      document.body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";

   } else {
      textElem.style.color = "black";
      textElem.style.fontWeight = "Normal";
      textElem.style.textDecoration = "none";
      document.body.style.backgroundImage = "";
   }
}

function attachHandler(){
    var bigBtn = document.getElementById("big");
    bigBtn.onclick = bigClick;    
    var ckBox = document.getElementById("ckbox");
    ckBox.onchange = ckBoxChange;
    var playBtn = document.getElementById("play");
    playBtn.onclick = playClick;
}

window.onload = attachHandler;

