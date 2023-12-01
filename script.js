// Loading Input
const CardName = document.getElementById("Card-Name");
const RightSide = document.getElementById("Right-Side");
const Image = document.getElementById("Image");
const ImageCaption = document.getElementById("Image-Caption");
const CenterCaption = document.getElementById("Center-Caption");
const CardText = document.getElementById("Card-Text");
const FooterText = document.getElementById("Footer-Text");
const TextColor = document.getElementById("TextColor");
const BorderColor = document.getElementById("BorderColor");
const BackgroundColor = document.getElementById("BackgroundColor");
const FontCSS = document.getElementById("FontCSS");
const BuildCardButton = document.getElementById("BuildCardButton");

// Canvas Variables

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


function buildCardImage () {
    console.log("buildign");

    //Step 1: Background
    ctx.fillStyle = BackgroundColor.value;
    ctx.fillRect(6,6,438,738);

    //Step 2: Border
    ctx.lineJoin = "round";
    ctx.lineWidth = 12;
    ctx.strokeStyle = BorderColor.value;
    ctx.strokeRect(6, 6, 438, 738);

    //Step 3: Header
    ctx.

    console.log("done");
}

ctx.fillText("The card will be built here.",50,50)

BuildCardButton.addEventListener("click",buildCardImage);