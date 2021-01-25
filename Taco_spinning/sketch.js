let img;
let value = 1000;

let x = 0;
let y = 0;

let tekst = 'Tryk <- for langsomere - Tryk -> for hurtigere';

// Arbejder på at gøre så man kan bevæge taco med wasd

function preload() {
 
  
  img = loadImage('Taco.png');
}
function setup() {

  value = 1000;
  
}

function draw() {
  createCanvas(600, 500);
  
  let s = 'The quick brown fox jumped over the lazy dog.';
  fill(50);
  text('hej', 10, 10);

   imageMode(CENTER);
    rotate(millis() / value );
   background(220);
  image(img, x, y, 443, 397);

  }

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = value + 100;
  } else if (keyCode === RIGHT_ARROW) {
    value = value - 100;
  } 
    
  console.log(value)
}
