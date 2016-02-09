function setup() {
	createCanvas(windowWidth,windowHeight);
	rectMode(CENTER);
  
}

function draw() {
		rectMode(CENTER);
	background(100);
	if (mouseX < width / 2) {
    ellipse(mouseX, mouseY, 30, 30);
	}
	else {
		rect(mouseX, mouseY, 200, 200);
	}
}