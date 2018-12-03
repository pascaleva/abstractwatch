var strokeR = 204;
var strokeG = 230;
var strokeB = 255;

angleMode(DEGREES);


var sec = second();
var min = minute();
var hr = hour();

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(1);
}

function draw() {
	strokeWeight(1);
	background(0);
	noFill();

	 push();
	 //ellipse decrease to center = seconds
	 	 for (var j = 0; j < second(); j ++){
	 			 stroke(strokeR, strokeG, strokeB);
	 			 ellipse(width/2, height/2, 2*j+430, 2*j+430);
	 	 }
		 pop();


		 //ellipse rotate = minutes
			 translate(width/2, height/2);
			 for (var a = 0; a < minute(); a ++) {
					 strokeR = map(a, 0, 59, 255, 50);
					 strokeG = map(a, 0, 59, 0, 204);
					 strokeB = map(a, 0, 59, 50, 240);
					 stroke(strokeR, strokeG, strokeB);
					 rotate(radians(3));
					 ellipse(0, 0, 50, 600);
			 }


			 //Die Kreise, welche die Stunden darstellen sollen, sollen sich um den Kreis (innen ausgerichtet) der Sekunden anordnen
					noStroke();
					fill(255,255,255);
					ellipse(0, 0, 50, 50);



			/*push();
     //squares increased = hours
		 rectMode(CENTER);
		 translate(3, 3);
     for (var h = 0; h < hour(); h ++){
         stroke(255,255,255);
				 rect(-2.5, -2.5, 20*h, 20*h);
     }
		 pop();*/
	 }



/*
	Kommentar

 */
