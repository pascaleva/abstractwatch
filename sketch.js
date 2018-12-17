var strokeR = 204;
var strokeG = 230;
var strokeB = 255;

var sec = second();
var min = minute();
var h = hour();

function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
}

function draw() {
	strokeWeight(1);
	background(0);
	noFill();


	translate(width/2, height/2);
	push();
	//ellipses rotate = seconds
		for (var a = 0; a < second(); a ++) {
				strokeR = map(a, 0, 59, 255, 50);
				strokeG = map(a, 0, 59, 0, 204);
				strokeB = map(a, 0, 59, 50, 240);
				stroke(strokeR, strokeG, strokeB);
				rotate(3);
				ellipse(0, 0, 40, 500);
		}
		pop();


	 //big ellipses increase = minutes
	 	 for (var j = 0; j < minute(); j ++){
	 			stroke(strokeR, strokeG, strokeB,60);
	 			ellipse(0, 0, 515+j*14, 515+j*14);
	 	 }


			 //filled ellipses are hours
			 for(var r = 0; r < hour(); r ++) {
				noStroke();
				fill(strokeR, strokeG, strokeB);
				rotate(15);
				ellipse(0, 280, 24, 24);
			}

	 }
