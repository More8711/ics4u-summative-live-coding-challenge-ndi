// Adapted from: Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Recursion
// Edited Video: https://www.youtube.com/watch?v=jPsZwrV9ld0

function setup() {
  createCanvas(600, 600);
  let i = random(100,500);
  let z = random(100,500);
  let p =random(100,500);
  circ = new circleOBJ(i,z,p);

}

class circleOBJ{
    constructor(x,y,d){
      this.x = x;
      this.y = y;
      this.d = d;
      
    }
  display(){
    if (this.d > 10){
    this.d= this.d*0.8
    fill(this.d*0.9, (this.y*this.x)*0.03,this.y*0.8)
 ellipse(this.x*random(1),this.y*random(1),this.d);
    circ.display();
    }
}

  
}

function draw(){
  circ.display();

}
