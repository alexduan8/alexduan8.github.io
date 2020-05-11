var state;
let begin;
var Width = 800;
var Height = 600;
let q, w, e, r, t, y, u, i, o, p;
var randWidth, randHeight;
let a, s, d, f, g, h, j, k, l;
let z, x, c, v, b, n, m;
let upHeld;
let qHeld, wHeld, eHeld, rHeld, tHeld, yHeld, uHeld, iHeld, oHeld, pHeld;
let aHeld, sHeld, dHeld, fHeld, gHeld, hHeld, jHeld, kHeld, lHeld;
let zHeld, xHeld, cHeld, vHeld, bHeld, nHeld, mHeld;
var circleRedrawCount = 20;
var dropradius = 50;
var drawCount = 0;
var xCenter = 0;
var yCenter = 0;

function preload(){
	q = loadSound("waterdrop.mov");
	w = loadSound("click.m4a");
	e = loadSound("pop.m4a");
	r = loadSound("switch.m4a");
	t = loadSound("flick.m4a");
	y = loadSound("paper.m4a");
	u = loadSound("soda.m4a");
	i = loadSound("snap.m4a");
	o = loadSound("rubberband.m4a");
	p = loadSound("hand.m4a");
  a = loadSound("cards.m4a");
  s = loadSound("ice.m4a");
  d = loadSound("controller.m4a");
  f = loadSound("writing.m4a");
  g = loadSound("camera.m4a");
  h = loadSound("scissors.m4a");
  j = loadSound("lighter.m4a");
  k = loadSound("stapler.m4a");
  l = loadSound("spray.m4a");
	z = loadSound("sweep.m4a");
  x = loadSound("letter.m4a");
  c = loadSound("chips.m4a");
  v = loadSound("shake.m4a");
  b = loadSound("leaves.m4a");
  n = loadSound("chopstick.m4a");
  m = loadSound("pages.m4a");
}
function setup() {
	createCanvas(Width, Height);
  textFont("Courier New");
  state = 0;
	begin = millis();
}

function draw() {
	randWidth = random(0, width);
  randHeight = random(0, height);
	var displayText = "Press UP to start. Press all keys to make a noise";
	if (upHeld == true) {
		state = 1;
		upHeld = false;
	}
  if (state == 0) {
    background(0);
    push();
    fill("#ff0072");
    textSize(40);
    textAlign(CENTER);
    for (var count = 0; count < displayText.length; count++) {
      var floatyHeight = sin(count*0.1+(millis()*0.001)) * 50;
      text(displayText[count], (width/displayText.length-1)*(count+1), (height/2) + floatyHeight);
    }
		pop();
		push();
		fill("#ff0072");
		textSize(20);
    textAlign(CENTER);
		pop();
  }
	if(state == 1) {
		background(255, 204, 255);
		noStroke();
		if (qHeld == true) {
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				q.play();
			}
			if (drawCount != circleRedrawCount) {
				var qText = "drop";
				push();
				textSize(15);
				fill(153, 204, 255);
				drawEllipse(xCenter, yCenter, dropradius);
				fill(51, 51, 153);
				text(qText, xCenter, yCenter);
				dropradius += 10;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				qHeld = false;
				dropradius = 0;
			}
		}
		if (wHeld == true) {
			/*var wText = "click";
			push();
			textSize(20);
			fill(255);
			text(wText, randWidth, randHeight);
			pop();
			wHeld = false;
			w.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				w.play();
			}
			if (drawCount != circleRedrawCount) {
				var wText = "click";
				push();
				textSize(20);
				fill(255, 80, 80);
				rect(Width/2, 0, Width/2, dropradius);
				fill(255, 255, 255);
				text(wText, xCenter, yCenter);
				dropradius += 40;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				wHeld = false;
				dropradius = 0;
			}
		}
		if (eHeld == true) {
			/*var eText = "pop";
			push();
			textSize(15);
			fill(255, 254, 146);
			text(eText, randWidth, randHeight);
			pop();
			eHeld = false;
			e.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				e.play();
			}
			if (drawCount != circleRedrawCount) {
				var eText = "pop";
				push();
				textSize(18);
				stroke(179, 255, 217);
				strokeWeight(4);
				line(xCenter, yCenter, xCenter + dropradius, yCenter + dropradius);
				line(xCenter, yCenter, xCenter - dropradius, yCenter - dropradius);
				line(xCenter, yCenter, xCenter + dropradius, yCenter - dropradius);
				line(xCenter, yCenter, xCenter - dropradius, yCenter + dropradius);
				noStroke();
				fill(255, 204, 255);
				circle(Width/2, Height/2, 30);
				fill(0, 204, 102);
				text(eText, xCenter, yCenter);
				dropradius += 30;
				drawCount += 5
				pop();
			} else {
				noLoop();
				drawCount = 0;
				eHeld = false;
				dropradius = 0;
			}
		}
		if (rHeld == true) {
			/*var rText = "switch";
			push();
			textSize(15);
			fill(153, 255, 204);
			text(rText, randWidth, randHeight);
			pop();
			rHeld = false;
			r.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				r.play();
			}
			if (drawCount != circleRedrawCount) {
				var rText = "switch";
				push();
				textSize(20);
				fill(255, 204, 102);
				rect(0, Height/2, Width, dropradius);
				fill(255, 255, 255);
				text(rText, xCenter, yCenter);
				dropradius += 40;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				rHeld = false;
				dropradius = 0;
			}
		}
		if (tHeld == true) {
			/*var tText = "flick";
			push();
			textSize(25);
			fill(255, 204, 153);
			text(tText, randWidth, randHeight);
			pop();
			tHeld = false;
			t.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				t.play();
			}
			if (drawCount != circleRedrawCount) {
				var tText = "flick";
				push();
				textSize(20);
				fill(204, 0, 255);
				rect(0, Height, Width, Height - dropradius);
				fill(82, 0, 102);
				text(tText, xCenter, yCenter);
				dropradius += 40;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				tHeld = false;
				dropradius = 0;
			}
		}
		if (yHeld == true) {
			/*var yText = "paper";
			push();
			textSize(25);
			fill(255);
			text(yText, randWidth, randHeight);
			pop();
			yHeld = false;
			y.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				dropradius = 150;
				y.play();
			}
			if (drawCount != circleRedrawCount) {
				var yText = "paper";
				push();
				textSize(15);
				fill(255, 0, 85);
				drawEllipse(xCenter, yCenter, dropradius);
				fill(255, 77, 136);
				text(yText, xCenter, yCenter);
				dropradius -= 10;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				yHeld = false;
				dropradius = 0;
			}
		}
		if (uHeld == true) {
			/*var uText = "soda";
			push();
			textSize(25);
			fill(179, 134, 0);
			text(uText, randWidth, randHeight);
			pop();
			uHeld = false;
			u.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				u.play();
			}
			if (drawCount != circleRedrawCount) {
				var uText = "soda";
				push();
				textSize(15);
				fill(204, 153, 255);
				drawEllipse(xCenter, yCenter, dropradius);
				drawEllipse(xCenter + 60 , yCenter - 120 , dropradius/2);
				drawEllipse(xCenter + 30 , yCenter - 240 , dropradius/4);
				fill(77, 0, 153);
				text(uText, xCenter, yCenter);
				text(uText, xCenter + 60 , yCenter - 120);
				text(uText, xCenter + 30 , yCenter - 240);
				dropradius += 10;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				uHeld = false;
				dropradius = 0;
			}
		}
		if (iHeld == true) {
			/*var iText = "snap";
			push();
			textSize(25);
			fill(204, 51, 255);
			text(iText, randWidth, randHeight);
			pop();
			iHeld = false;
			i.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				i.play();
			}
			if (drawCount != circleRedrawCount) {
				var iText = "snap";
				push();
				textSize(25);
				stroke(255, 80, 80);
				strokeWeight(8);
				line(xCenter, yCenter, xCenter + dropradius, yCenter + dropradius);
				line(xCenter, yCenter, xCenter - dropradius, yCenter - dropradius);
				line(xCenter, yCenter, xCenter + dropradius, yCenter - dropradius);
				line(xCenter, yCenter, xCenter - dropradius, yCenter + dropradius);
				line(xCenter, yCenter, xCenter, yCenter - dropradius);
				line(xCenter, yCenter, xCenter, yCenter + dropradius);
				line(xCenter, yCenter, xCenter + dropradius, yCenter);
				line(xCenter, yCenter, xCenter - dropradius, yCenter);
				noStroke();
				fill(255, 204, 255);
				circle(Width/2, Height/2, 40);
				fill(179, 0, 0);
				text(iText, xCenter, yCenter);
				dropradius += 30;
				drawCount += 5
				pop();
			} else {
				noLoop();
				drawCount = 0;
				iHeld = false;
				dropradius = 0;
			}
		}
		if (oHeld == true) {
			/*var oText = "rubberband";
			push();
			textSize(25);
			fill(255, 102, 153);
			text(oText, randWidth, randHeight);
			pop();
			oHeld = false;
			o.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				o.play();
			}
			if (drawCount != circleRedrawCount) {
				var oText = "rubberband";
				push();
				textSize(20);
				fill(51, 133, 255);
				rect(xCenter, yCenter, xCenter + dropradius, 100, 20);
				fill(0, 61, 153);
				text(oText, xCenter, yCenter);
				dropradius += 40;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				oHeld = false;
				dropradius = 0;
			}
		}
		if (pHeld == true) {
			/*var pText = "hand";
			push();
			textSize(25);
			fill(255, 153, 153);
			text(pText, randWidth, randHeight);
			pop();
			pHeld = false;
			p.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				p.play();
			}
			if (drawCount != circleRedrawCount) {
				var pText = "hand";
				push();
				textSize(20);
				fill(255, 204, 153);
				arc(xCenter, yCenter, 450, 450, 0, dropradius);
				fill(255, 128, 0);
				text(pText, xCenter, yCenter);
				dropradius += 40;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				pHeld = false;
				dropradius = 0;
			}
		}
    if (aHeld == true) {
			/*var aText = "cards";
			push();
			textSize(15);
			fill(168, 235, 254);
			text(aText, randWidth, randHeight);
			pop();
			aHeld = false;
			a.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				a.play();
			}
			if (drawCount != circleRedrawCount) {
				var aText = "cards";
				push();
				textSize(20);
				fill(153, 255, 153);
				rect(0, Height, 200, yCenter - dropradius, 20);
				rect(200, Height, 200, yCenter - dropradius, 20);
				rect(400, Height, 200, yCenter - dropradius, 20);
				rect(600, Height, 200, yCenter - dropradius, 20);
				rect(800, Height, 200, yCenter - dropradius, 20);
				fill(102, 255, 102);
				text(aText, xCenter, yCenter);
				dropradius += 40;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				aHeld = false;
				dropradius = 0;
			}
		}
		if (sHeld == true) {
			/*var sText = "ice";
			push();
			textSize(20);
			fill(255);
			text(sText, randWidth, randHeight);
			pop();
			sHeld = false;
			s.play();*/
			if (drawCount == 0){
				xCenter = 70;
				yCenter = randHeight;
				s.play();
			}
			if (drawCount != circleRedrawCount) {
				var sText = "ice";
				push();
				textSize(20);
				fill(153, 153, 255);
				rect(xCenter, yCenter + dropradius, 200, 200, 20);
				rect(xCenter + 230, yCenter + dropradius, 200, 200, 20);
				rect(xCenter + 460, yCenter + dropradius, 200, 200, 20);
				fill(153, 51, 255);
				text(sText, xCenter, yCenter);
				dropradius += 40;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				sHeld = false;
				dropradius = 0;
			}
		}
		if (dHeld == true) {
			/*var dText = "button";
			push();
			textSize(15);
			fill(255, 254, 146);
			text(dText, randWidth, randHeight);
			pop();
			dHeld = false;
			d.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				d.play();
			}
			if (drawCount != circleRedrawCount) {
				var dText = "button";
				push();
				textSize(17);
				fill(255, 255, 102);
				drawEllipse(xCenter, yCenter, dropradius);
				fill(255, 153, 51);
				text(dText, xCenter, yCenter);
				dropradius += 40;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				dHeld = false;
				dropradius = 0;
			}
		}
		if (fHeld == true) {
			/*var fText = "pen";
			push();
			textSize(15);
			fill(153, 255, 204);
			text(fText, randWidth, randHeight);
			pop();
			fHeld = false;
			f.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				f.play();
			}
			if (drawCount != circleRedrawCount) {
				var fText = "pen";
				push();
				textSize(20);
				fill(153, 153, 102);
				rect(xCenter, yCenter, 100, yCenter - dropradius, 20);
				fill(51, 51, 0);
				text(fText, xCenter, yCenter);
				dropradius += 40;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				fHeld = false;
				dropradius = 0;
			}
		}
		if (gHeld == true) {
			/*var gText = "cheese";
			push();
			textSize(25);
			fill(255, 204, 153);
			text(gText, randWidth, randHeight);
			pop();
			gHeld = false;
			g.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				g.play();
			}
			if (drawCount != circleRedrawCount) {
				background(255,255,255);
				var gText = "cheese";
				push();
				textSize(20);
				fill(255, 255, 102);
				triangle(xCenter, yCenter, xCenter + dropradius, yCenter + dropradius, xCenter - dropradius, yCenter - dropradius);
				fill(0, 0, 0);
				text(gText, xCenter, yCenter);
				dropradius += 40;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				gHeld = false;
				dropradius = 0;
			}
		}
		if (hHeld == true) {
			/*var hText = "snip";
			push();
			textSize(25);
			fill(255);
			text(hText, randWidth, randHeight);
			pop();
			hHeld = false;
			h.play();*/
			if (drawCount == 0){
				xCenter = 0;
				yCenter = randHeight;
				h.play();
			}
			if (drawCount != circleRedrawCount) {
				var hText = "snip";
				push();
				textSize(20);
				fill(102, 153, 255);
				rect(xCenter, yCenter, 800, yCenter - dropradius, 20);
				fill(255, 102, 102);
				rect(xCenter, yCenter, 800, yCenter + dropradius, 20);
				fill(51, 51, 0);
				text(hText, xCenter, yCenter);
				dropradius += 40;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				hHeld = false;
				dropradius = 0;
			}
		}
		if (jHeld == true) {
			/*var jText = "light";
			push();
			textSize(25);
			fill(179, 134, 0);
			text(jText, randWidth, randHeight);
			pop();
			jHeld = false;
			j.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				j.play();
			}
			if (drawCount != circleRedrawCount) {
				var jText = "light";
				push();
				background(0);
				textSize(15);
				stroke(255, 80, 80);
				strokeWeight(4);
				fill(255, 179, 102,191);
				drawEllipse(xCenter, yCenter, dropradius);
				noStroke();
				fill(255, 255, 77);
				text(jText, xCenter, yCenter);
				dropradius += 10;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				jHeld = false;
				dropradius = 0;
			}
		}
		if (kHeld == true) {
			/*var kText = "click";
			push();
			textSize(25);
			fill(204, 51, 255);
			text(kText, randWidth, randHeight);
			pop();
			kHeld = false;
			k.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				k.play();
			}
			if (drawCount != circleRedrawCount) {
				var kText = "click";
				push();
				textSize(20);
				fill(153, 153, 255);
				rect(0, Height/2, Width, dropradius);
				fill(102, 102, 255);
				rect(0, Height/2, Width, -dropradius);
				fill(255, 255, 255);
				text(kText, xCenter, yCenter);
				dropradius += 40;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				kHeld = false;
				dropradius = 0;
			}
		}
		if (lHeld == true) {
			/*var lText = "spray";
			push();
			textSize(25);
			fill(255, 102, 153);
			text(lText, randWidth, randHeight);
			pop();
			lHeld = false;
			l.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				l.play();
			}
			if (drawCount != circleRedrawCount) {
				var lText = "spray";
				push();
				textSize(18);
				stroke(0, 153, 255);
				strokeWeight(6);
				line(xCenter, yCenter, xCenter + dropradius, yCenter + dropradius);
				//line(xCenter, yCenter, xCenter - dropradius, yCenter - dropradius);
				line(xCenter, yCenter, xCenter + dropradius, yCenter - dropradius);
				//line(xCenter, yCenter, xCenter - dropradius, yCenter + dropradius);
				//line(xCenter, yCenter, xCenter, yCenter - dropradius);
				//line(xCenter, yCenter, xCenter, yCenter + dropradius);
				line(xCenter, yCenter, xCenter + dropradius, yCenter);
				//line(xCenter, yCenter, xCenter - dropradius, yCenter);
				noStroke();
				fill(255, 204, 255);
				circle(Width/2, Height/2, 30);
				fill(102, 255, 255);
				text(lText, xCenter, yCenter);
				dropradius += 50;
				drawCount += 5
				pop();
			} else {
				noLoop();
				drawCount = 0;
				lHeld = false;
				dropradius = 0;
			}
		}
		if (zHeld == true) {
			/*var zText = "sweep";
			push();
			textSize(15);
			fill(168, 235, 254);
			text(zText, randWidth, randHeight);
			pop();
			zHeld = false;
			z.play();*/
			if (drawCount == 0){
				xCenter = Width/2;
				yCenter = Height/2;
				z.play();
			}
			if (drawCount != circleRedrawCount) {
				var zText = "sweep";
				push();
				textSize(20);
				fill(255, 204, 153);
				arc(xCenter, yCenter, 1000, 1000, 0, dropradius);
				fill(255, 128, 0);
				text(zText, xCenter, yCenter);
				dropradius += HALF_PI;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				zHeld = false;
				dropradius = 0;
			}
		}
		if (xHeld == true) {
			/*var xText = "rip";
			push();
			textSize(20);
			fill(255);
			text(xText, randWidth, randHeight);
			pop();
			xHeld = false;
			x.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				x.play();
			}
			if (drawCount != circleRedrawCount) {
				var xText = "rip";
				push();
				textSize(20);
				fill(153, 153, 255);
				rect(0, Height, Width, -dropradius);
				fill(102, 102, 255);
				rect(Width/2, 0, Width, dropradius);
				fill(255, 255, 255);
				text(xText, xCenter, yCenter);
				dropradius += 40;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				xHeld = false;
				dropradius = 0;
			}
		}
		if (cHeld == true) {
			/*var cText = "crunch";
			push();
			textSize(15);
			fill(255, 254, 146);
			text(cText, randWidth, randHeight);
			pop();
			cHeld = false;
			c.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				c.play();
			}
			if (drawCount != circleRedrawCount) {
				var cText = "crunch";
				push();
				textSize(20);
				fill(255, 255, 102);
				rect(0, 0, Width, dropradius);
				fill(255, 204, 0);
				rect(0, Height, Width, -dropradius);
				fill(255, 153, 102);
				text(cText, xCenter, yCenter);
				dropradius += 40;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				cHeld = false;
				dropradius = 0;
			}
		}
		if (vHeld == true) {
			/*var vText = "shake";
			push();
			textSize(15);
			fill(153, 255, 204);
			text(vText, randWidth, randHeight);
			pop();
			vHeld = false;
			v.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				v.play();
			}
			if (drawCount != circleRedrawCount) {
				var vText = "shake";
				push();
				textSize(20);
				fill(153, 204, 255);
				rect(0, 0, 200, dropradius);
				fill(0, 204, 255);
				rect(200, Height, 200, -dropradius);
				fill(153, 204, 255);
				rect(400, 0, 200, dropradius);
				fill(0, 204, 255);
				rect(600, Height, 200, -dropradius);
				fill(153, 153, 255);
				rect(800, 0, 200, dropradius);
				fill(255, 255, 255);
				text(vText, xCenter, yCenter);
				dropradius += 40;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				vHeld = false;
				dropradius = 0;
			}
		}
		if (bHeld == true) {
			/*var bText = "rustle";
			push();
			textSize(25);
			fill(255, 204, 153);
			text(bText, randWidth, randHeight);
			pop();
			bHeld = false;
			b.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				b.play();
			}
			if (drawCount != circleRedrawCount) {
				var bText = "rustle";
				push();
				textSize(20);
				fill(153, 153, 102);
				rect(0, 0, dropradius, 200);
				fill(153, 102, 51);
				rect(Width, 200, -dropradius, 200);
				fill(153, 153, 102);
				rect(0, 400, dropradius, 200);
				fill(0, 204, 255);
				rect(Width, 600, -dropradius, 200);
				fill(204, 204, 0);
				text(bText, xCenter, yCenter);
				dropradius += 40;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				bHeld = false;
				dropradius = 0;
			}
		}
		if (nHeld == true) {
			/*var nText = "swish";
			push();
			textSize(25);
			fill(255);
			text(nText, randWidth, randHeight);
			pop();
			nHeld = false;
			n.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				n.play();
			}
			if (drawCount != circleRedrawCount) {
				var nText = "swish";
				push();
				textSize(15);
				fill(153, 204, 255);
				drawEllipse(Width - dropradius, Height/2, 300 + dropradius);
				fill(51, 51, 153);
				text(nText, xCenter, yCenter);
				dropradius += 10;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				nHeld = false;
				dropradius = 0;
			}
		}
		if (mHeld == true) {
			/*var mText = "flip";
			push();
			textSize(25);
			fill(179, 134, 0);
			text(mText, randWidth, randHeight);
			pop();
			mHeld = false;
			m.play();*/
			if (drawCount == 0){
				xCenter = randWidth;
				yCenter = randHeight;
				m.play();
			}
			if (drawCount != circleRedrawCount) {
				var mText = "flip";
				push();
				textSize(15);
				fill(204, 51, 153);
				drawEllipse(Width/2, Height-dropradius, 300 - dropradius);
				fill(255, 51, 153);
				drawEllipse(Width/2, 0+dropradius, 300 + dropradius);
				fill(255,255,255);
				text(mText, xCenter, yCenter);
				dropradius += 10;
				drawCount++
				pop();
			} else {
				noLoop();
				drawCount = 0;
				mHeld = false;
				dropradius = 0;
			}
		}
	}

}
function keyPressed() {
	print(key + " pressed.");
	if (key === "ArrowUp"){ upHeld = true; }
	if (key === "q"){ qHeld = true; loop();}
	if (key === "w"){ wHeld = true; loop();}
	if (key === "e"){ eHeld = true; loop();}
	if (key === "r"){ rHeld = true; loop();}
	if (key === "t"){ tHeld = true; loop();}
	if (key === "y"){ yHeld = true; loop();}
	if (key === "u"){ uHeld = true; loop();}
	if (key === "i"){ iHeld = true; loop();}
	if (key === "o"){ oHeld = true; loop();}
	if (key === "p"){ pHeld = true; loop();}
  if (key === "a"){ aHeld = true; loop();}
  if (key === "s"){ sHeld = true; loop();}
  if (key === "d"){ dHeld = true; loop();}
  if (key === "f"){ fHeld = true; loop();}
  if (key === "g"){ gHeld = true; loop();}
  if (key === "h"){ hHeld = true; loop();}
  if (key === "j"){ jHeld = true; loop();}
  if (key === "k"){ kHeld = true; loop();}
  if (key === "l"){ lHeld = true; loop();}
	if (key === "z"){ zHeld = true; loop();}
  if (key === "x"){ xHeld = true; loop();}
  if (key === "c"){ cHeld = true; loop();}
  if (key === "v"){ vHeld = true; loop();}
  if (key === "b"){ bHeld = true; loop();}
  if (key === "n"){ nHeld = true; loop();}
  if (key === "m"){ mHeld = true; loop();}
}

function keyReleased() {
	//if (key === "q"){ loop(); }
	/*print(key + " released.");
	if (key === "ArrowUp"){ upHeld = false; }
	if (key === "q"){ qHeld = false; }
	if (key === "87"){ wHeld = false; }
	if (key === "69"){ eHeld = false; }
	if (key === "82"){ rHeld = false; }
	if (key === "84"){ tHeld = false; }
	if (key === "89"){ yHeld = false; }
	if (key === "85"){ uHeld = false; }
	if (key === "73"){ iHeld = false; }
	if (key === "79"){ oHeld = false; }
	if (key === "80"){ pHeld = false; }*/
}
function drawEllipse(xloc, yloc, radius) {
	this.xloc = xloc;
	this.yloc = yloc;
	ellipse(xloc, yloc, radius*2, radius*2);
	/*for (var count =0; count <= time; count = count + 1){
  	ellipse(xloc, yloc, r*2, r*2);
		r = r+1;
  }*/
}
