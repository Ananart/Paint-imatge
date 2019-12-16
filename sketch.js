var img1;
pinta = false;
x = 0;
y = 0;

function setup() {
  img1 = loadImage ('i8.png');
  createCanvas(500, 500);
  background (200,40,300); 
  
}

function draw() {
   if(mouseIsPressed){
    pinta = true;
  }
  else{
    pinta = false;
  }
  
  if(pinta){

  image (img1, mouseX,mouseY,100,100);
     }
  x = mouseX;
  y = mouseY;
  
}
