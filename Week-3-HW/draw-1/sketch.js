var circle1 = 0;
var speed = 2;

var circle2 = 0;
var speed2 = 2;

function setup() {
  createCanvas(500,500);
}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(4);
	noFill();
	ellipse(circle1,250,500,500);
	
	if (circle1 > width) {
		speed = -2;
	}	else if(circle1 == 0) {
		speed = 2;
	}
 circle1 = circle1 + speed2;
 
 ellipse(250,circle2,500,500);
 circle2 = circle2 + speed2;
 
 if (circle2 > height) {
 		speed2 = -2;
 }	else if(circle2 == 0) {
 	speed2 = 2;
 }
}

