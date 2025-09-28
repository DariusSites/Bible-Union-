//DROP DOWN NAV BUTTONNS//
//----------------DECLARE AND LINK HTML ELEMENTS--------//
let dropText = document.querySelectorAll(".dsk-innerTXT")
let dropBox = document.querySelectorAll(".dsk-dropListCONT")
let communityTxt = document.querySelector("#Community");
let commTextBox = document.querySelector("#dsk-commCONT");
let resourceTxt = document.querySelector("#Resources");
let resTextBox = document.querySelector("#dsk-resCONT");
let mainWindow = document.querySelector("main");

//-----------Create Function  visable Function //  
function VisibleBox(event){
    if(event.target.id === "Resources"){
            resTextBox.style.visibility = "visible";
            commTextBox.style.visibility = "hidden";
    }
    else if(event.target.id === "Community"){
        commTextBox.style.visibility = "visible";
        resTextBox.style.visibility = "hidden";
    }
    else{
        dropBox.style.visibility = "hidden";
    }
};

//----ADD CLICK listener and call VISIBLE FUNCTION
dropText.forEach((dropText) =>{
    dropText.addEventListener("click",VisibleBox)
}
)
//ALL DROP DOWN BOX DISAPPEAR FUNCTION//
function allDropHidden(event){
    if (!event.target.closest(".dsk-dropListCONT") && 
        !event.target.closest(".dsk-innerTXT")) {
        commTextBox.style.visibility = "hidden";
        resTextBox.style.visibility = "hidden";
    }
}
mainWindow.addEventListener("click",allDropHidden);
//-----------------------------------TILTING BIBLE----------------------//
let movableItem = document.querySelector("#bible");

// How much tilt (higher = more tilt)
let tiltStrength = 20;

movableItem.addEventListener("mousemove", (e) => {
  let rect = movableItem.getBoundingClientRect();
  let centerX = rect.left + rect.width / 2;
  let centerY = rect.top + rect.height / 2;

  // Calculate offset relative to center
  let offsetX = (e.clientX - centerX) / tiltStrength;
  let offsetY = (e.clientY - centerY) / tiltStrength;

  // Apply 3D rotation
  movableItem.style.transform = `rotateX(${-offsetY}deg) rotateY(${offsetX}deg)`;
});

movableItem.addEventListener("mouseleave", () => {
  // Reset tilt
  movableItem.style.transform = `rotateX(0deg) rotateY(0deg)`;
});
//============================RANDOM QUOTES=====================================//
//------------------------STAGE1-------//
let randomQuotes = document.querySelector("#quotesCONT");
let Q1 = "Philippians 4:13 - “I can do all things through Christ who strengthens me.” "; 
let Q2 = "Jeremiah 29:11 - “For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you a future and a hope.” ";
let Q3 = "Romans 8:28 - “And we know that in all things God works for the good of those who love him, who have been called according to his purpose.” ";
let Q4 = "Psalm 46:1 - “God is our refuge and strength, an ever-present help in trouble.”"; 

let quoteGroup = [Q1,Q2,Q3,Q4];
//------------------------STAGE2----------------------//
function generateQuotes(){
    let i = Math.floor(Math.random()*quoteGroup.length);
    randomQuotes.innerText = quoteGroup[i];
}
//------------------------STAGE3----------------------//
window.addEventListener("load",generateQuotes);



    