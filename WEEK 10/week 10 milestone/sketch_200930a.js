let words = ["We are the hackers of abstractions", "We produce NEW CONCEPTS" , "NEW PRODUCTIONS", "NEW SENSATIONS", "Hackers create the possibility of new things entering the world", "Not always great things", "Or even good things", "But NEW things", "The sectoral world is dynamic", "All classes enter into relations of CONFLICT", "COLLUSION", "and COMPROMISE", "The class struggle drives history into abstraction", "and abstraction into history"];
let index = 0; 
let wiggle1 = 'abstraction';
let wiggle2 = 'new';
let wiggle3 = 'history';

function setup() {
  createCanvas(windowWidth, windowHeight); 
  noStroke();
  textFont("Futura");
  fill(0);
 
}

function draw() {
  background(235);
  
    for( let j = 1; j < 10; j++){
    for( let i = 0; i < wiggle1.length; i++){
      let x = cos(i/1.8 + frameCount / 90) * 70;
      let y = sin(i/1.8 + frameCount / 90) * 70;
      
      textSize(19);
      text(wiggle1[i], 1100 + x * j, windowHeight/2 + y * j); 
     
  }
}
      
    for( let a = 1; a < 6; a++){
    for( let b = 0; b < wiggle1.length; b++){
      let x = cos(b/0.5 + frameCount / 40) * 25;
      let y = sin(b/0.5 + frameCount / 40) * 25;
      
      textSize(22);
      text(wiggle2[b], 300 + x * a, 550 + y * a); 
   
  }
}
      
    for( let j = 1; j < 4; j++){
    for( let i = 0; i < wiggle1.length; i++){
      let x = cos(i/1.15 + frameCount / 30) * 30;
      let y = sin(i/1.15 + frameCount / 30) * 30;
      
      textSize(16);
      text(wiggle3[i], 250 + x * j, 180 + y * j);
    
  }
}
  
  textSize(32);
  text(words[index],100,windowHeight/2);

}

function mousePressed(){
  index++;
  if(index > words.length-1){
   index = 0; 
  
  }
}
