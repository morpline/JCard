// Loading Input
const CardName = document.getElementById("Card-Name");
const RightSide = document.getElementById("Right-Side");
const Imsage   = document.getElementById("Image");
const ImageCaption = document.getElementById("Image-Caption");
const CenterCaption = document.getElementById("Center-Caption");
const CardText = document.getElementById("Card-Text");
const TextAreaChars = document.getElementById("TextAreaChars");
const TextAreaDisplay = document.getElementById("TextAreaDisplay");
const FooterText = document.getElementById("Footer-Text");
const TextColor = document.getElementById("TextColor");
const BorderColor = document.getElementById("BorderColor");
const BackgroundColor = document.getElementById("BackgroundColor");
const FontCSS = document.getElementById("FontCSS");

const BuildCardButton = document.getElementById("BuildCardButton");

const imageHidden = document.getElementById("imageHidden");

// Canvas Variables

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


async function buildCardImage (x,y,preset = {}) {
    console.log("buildign");
    let values = {
      width:750,
      height:1050,
      border:6,
      rightsidewidth:80,
      textleftside:20,
      textleftsidewide:30,
    }
    if(preset.valid) {
      values = preset;
    }
    //Step 1: Background
    ctx.fillStyle = BackgroundColor.value;
    ctx.fillRect(values.border+x,values.border+y,values.width-(values.border*2),values.height-(values.border*2));

    //Step 2: Border
    ctx.lineJoin = "round";
    ctx.lineWidth = 12;
    ctx.strokeStyle = BorderColor.value;
    ctx.strokeRect(values.border+x,values.border+y,values.width-(values.border*2),values.height-(values.border*2));

    //Step 3: Header
    ctx.fillStyle = TextColor.value;
    ctx.font = `50px ${FontCSS.value}`;
    ctx.fillText(CardName.value,values.textleftside+x,70+y,values.width-values.textleftside*2-values.rightsidewidth);

    ctx.textAlign = "right";
    ctx.fillText(RightSide.value,values.width-values.textleftside*2-values.rightsidewidth+x,70+y,values.rightsidewidth);

    ctx.textAlign = "left";

    //Step 4: Image and Caption
    ctx.fillRect(30+x,80+y,690,400);
    // const img = document.createElement("img");
    if((Imsage.files[0])) {
      imageHidden.src = URL.createObjectURL(Imsage.files[0]);
    }
    setTimeout(()=>{
      ctx.drawImage(imageHidden,30+x,80+y,690,400);

    },100);

    ctx.font = `30px ${FontCSS.value}`;


    if(CenterCaption.checked) {
      ctx.textAlign = "center";
      ctx.fillText(ImageCaption.value,375+x,510+y,720);
    } else {
      ctx.fillText(ImageCaption.value,30+x,510+y,720);
    }

    //Center
    ctx.textAlign = "left";
    let ct = CardText.value;
    // ctx.fillText(CardText.value,30,540,720);
    // for (let index = 0; (index < ct.length && index < 602); index++) {
    let index = 0;
    let locationindex = 0;
    let tempLine = "";
    let lineWidth = TextAreaChars.value;
    while (index < ct.length && index < 602) {
      const element = ct[index];
      if(element == "\n" || tempLine.length == lineWidth-1) {
        locationindex = (Math.floor(locationindex/lineWidth)+1)*lineWidth;
        ctx.fillText(tempLine,30+x,570+y+(Math.floor(locationindex/lineWidth))*30, 690);
        tempLine="";
        if(element == "\n" || element == " ") {
          index++;
        }
      } else {
        tempLine+=element;

        locationindex++;
        index++;
      }
    }
    if(tempLine) {
      locationindex = (Math.floor(locationindex/lineWidth)+1)*lineWidth;

      ctx.fillText(tempLine,30+x,570+y+(Math.floor(locationindex/lineWidth))*30, 720);

    }

    //Footer
    ctx.font = `15px ${FontCSS.value}`;
    ctx.fillText(FooterText.value,30+x,1025+y,720);

    console.log("done");
}

buildCardImage(0,0);
TextAreaChars.addEventListener("mousemove",()=>{
  TextAreaDisplay.innerText = TextAreaChars.value;
})
BuildCardButton.addEventListener("click",()=>{buildCardImage(0,0)});