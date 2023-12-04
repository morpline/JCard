// Loading Input
const CardName = document.getElementById("Card-Name");
const RightSide = document.getElementById("Right-Side");
const Imsage = document.getElementById("Image");
const ImageCaption = document.getElementById("Image-Caption");
const CenterCaption = document.getElementById("Center-Caption");
const CardText = document.getElementById("Card-Text");
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


async function buildCardImage () {
    console.log("buildign");

    //Step 1: Background
    ctx.fillStyle = BackgroundColor.value;
    ctx.fillRect(6,6,738,1038);

    //Step 2: Border
    ctx.lineJoin = "round";
    ctx.lineWidth = 12;
    ctx.strokeStyle = BorderColor.value;
    ctx.strokeRect(6, 6, 738, 1038);

    //Step 3: Header
    ctx.fillStyle = TextColor.value;
    ctx.font = `50px ${FontCSS.value}`;
    ctx.fillText(CardName.value,20,70,600);

    ctx.textAlign = "right";
    ctx.fillText(RightSide.value,670,70,60);

    ctx.textAlign = "left";

    //Step 4: Image and Caption
    ctx.fillRect(30,80,690,400);
    // const img = document.createElement("img");
    if((Imsage.files[0])) {
      imageHidden.src = URL.createObjectURL(Imsage.files[0]);
    }
    setTimeout(()=>{
      ctx.drawImage(imageHidden,30,80,690,400);

    },300);

    ctx.font = `30px ${FontCSS.value}`;


    if(CenterCaption.checked) {
      ctx.textAlign = "center";
    }
    ctx.fillText(ImageCaption.value,30,510,720);

    //Center
    ctx.textAlign = "left";
    let ct = CardText.value;
    // ctx.fillText(CardText.value,30,540,720);
    for (let index = 0; (index < ct.length && index < 602); index++) {
      const element = ct[index];
      ctx.fillText(element,30+(index%43)*15,570+(Math.floor(index/43))*30);
    }

    //Footer
    ctx.font = `15px ${FontCSS.value}`;
    ctx.fillText(FooterText.value,30,1025,720);

    console.log("done");
}

// buildCardImage();

BuildCardButton.addEventListener("click",buildCardImage);