var circleX = 50;
var speed1 = 2;
var circleX2 = 100;
var speed2 = 5;
var circleX3 = 250;
var speed3 = 10;
var circleX4 = 5;
var speed4 = 5;

function setup() {
	createCanvas(500, 500);

}

function draw() {
	background(240, 220, 220);

		noStroke();
	fill(238,136,132);
	ellipse(circleX4, 380, 200,200);

	noStroke();
	fill(194,229,223);
	ellipse(circleX, 50, 200, 200);
	
	noStroke();
	fill(255,172,173);
	ellipse(circleX2, 260, 50, 50);
	
		noStroke();
	fill(131,181,180);
	ellipse(circleX3, 300, 100, 100);

	
	circleX4 = circleX4 + speed4;
	circleX3 = circleX3 + speed3;
	circleX = circleX + speed1;
	circleX2 = circleX2 + speed2;
	
		if (circleX > width) {
		speed1 = -2;
	}	else if(circleX === 0) {
		speed1 = 2;
	}
	
	 if (circleX2 > height) {
 		speed2 = -5;
 }	else if(circleX2 === 0) {
 	speed2 = 10;
}

	 if (circleX3 > height) {
 		speed3 = -5;
 }	else if(circleX3 === 0) {
 	speed3 = 20;
}

	 if (circleX4 > height) {
 		speed4 = -5;
 }	else if(circleX4 === 5) {
 	speed4 = 10;

}
}