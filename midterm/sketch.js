var state;
let begin;
var Width = 800;
var Height = 600;
let q, w, e, r, t, y, u, i, o, p;
var x, c;
/*let a, s, d, f, g, h, j, k, l;
let z, x, c, v, b, n, m;
*/
let upHeld;
let qHeld, wHeld, eHeld, rHeld, tHeld, yHeld, uHeld, iHeld, oHeld, pHeld;
/*let aHeld, sHeld, dHeld, fHeld, gHeld, hHeld, jHeld, kHeld, lHeld;
let zHeld, xHeld, cHeld, vHeld, bHeld, nHeld, mHeld;*/

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
}
function setup() {
	createCanvas(Width, Height);
  textFont("Courier New");
  state = 0;
	begin = millis();
}
function draw() {
	x = random(0, width);
  c = random(0, height);
	var displayText = "Press UP to start. Press the top row of letters on your keyboard to make a sound";
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
    for (var a = 0; a < displayText.length; a++) {
      var floatyHeight = sin(a*0.1+(millis()*0.001)) * 50;
      text(displayText[a], (width/displayText.length-1)*(a+1), (height/2) + floatyHeight);
    }
		pop();
		push();
		fill("#ff0072");
		textSize(20);
    textAlign(CENTER);
		pop();
  }
	if(state == 1) {
		background(0);
		if (qHeld == true) {
			var qText = "drop";
			push();
			textSize(15);
			fill(168, 235, 254);
			text(qText, x, c);
			pop();
			qHeld = false;
			q.play();
		}
		if (wHeld == true) {
			var wText = "click";
			push();
			textSize(20);
			fill(255);
			text(wText, x, c);
			pop();
			wHeld = false;
			w.play();
		}
		if (eHeld == true) {
			var eText = "pop";
			push();
			textSize(15);
			fill(255, 254, 146);
			text(eText, x, c);
			pop();
			eHeld = false;
			e.play();
		}
		if (rHeld == true) {
			var rText = "switch";
			push();
			textSize(15);
			fill(153, 255, 204);
			text(rText, x, c);
			pop();
			rHeld = false;
			r.play();
		}
		if (tHeld == true) {
			var tText = "flick";
			push();
			textSize(25);
			fill(255, 204, 153);
			text(tText, x, c);
			pop();
			tHeld = false;
			t.play();
		}
		if (yHeld == true) {
			var yText = "paper";
			push();
			textSize(25);
			fill(255);
			text(yText, x, c);
			pop();
			yHeld = false;
			y.play();
		}
		if (uHeld == true) {
			var uText = "soda";
			push();
			textSize(25);
			fill(179, 134, 0);
			text(uText, x, c);
			pop();
			uHeld = false;
			u.play();
		}
		if (iHeld == true) {
			var iText = "snap";
			push();
			textSize(25);
			fill(204, 51, 255);
			text(iText, x, c);
			pop();
			iHeld = false;
			i.play();
		}
		if (oHeld == true) {
			var oText = "rubberband";
			push();
			textSize(25);
			fill(255, 102, 153);
			text(oText, x, c);
			pop();
			oHeld = false;
			o.play();
		}
		if (pHeld == true) {
			var pText = "hand";
			push();
			textSize(25);
			fill(255, 153, 153);
			text(pText, x, c);
			pop();
			pHeld = false;
			p.play();
		}
	}

}
function keyPressed() {
	print(key + " pressed.");
	if (key === "ArrowUp"){ upHeld = true; }
	if (key === "q"){ qHeld = true; }
	if (key === "w"){ wHeld = true; }
	if (key === "e"){ eHeld = true; }
	if (key === "r"){ rHeld = true; }
	if (key === "t"){ tHeld = true; }
	if (key === "y"){ yHeld = true; }
	if (key === "u"){ uHeld = true; }
	if (key === "i"){ iHeld = true; }
	if (key === "o"){ oHeld = true; }
	if (key === "p"){ pHeld = true; }
}

function keyReleased() {
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

