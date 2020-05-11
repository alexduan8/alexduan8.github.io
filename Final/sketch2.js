var state;
let begin;
var Width = 800;
var Height = 600;
let q, w, e, r, t, y, u, i, o, p;
var x, c;
let a, s, d, f, g, h, j, k, l;
/*let z, x, c, v, b, n, m;
*/
let upHeld;
let qHeld, wHeld, eHeld, rHeld, tHeld, yHeld, uHeld, iHeld, oHeld, pHeld;
let aHeld, sHeld, dHeld, fHeld, gHeld, hHeld, jHeld, kHeld, lHeld;
/*let zHeld, xHeld, cHeld, vHeld, bHeld, nHeld, mHeld;*/

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
	var displayText = "Press UP to start. Press top two rows to make a noise";
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
    for (var z = 0; z < displayText.length; z++) {
      var floatyHeight = sin(z*0.1+(millis()*0.001)) * 50;
      text(displayText[z], (width/displayText.length-1)*(z+1), (height/2) + floatyHeight);
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
    if (aHeld == true) {
			var aText = "cards";
			push();
			textSize(15);
			fill(168, 235, 254);
			text(aText, x, c);
			pop();
			aHeld = false;
			a.play();
		}
		if (sHeld == true) {
			var sText = "ice";
			push();
			textSize(20);
			fill(255);
			text(sText, x, c);
			pop();
			sHeld = false;
			s.play();
		}
		if (dHeld == true) {
			var dText = "button";
			push();
			textSize(15);
			fill(255, 254, 146);
			text(dText, x, c);
			pop();
			dHeld = false;
			d.play();
		}
		if (fHeld == true) {
			var fText = "pen";
			push();
			textSize(15);
			fill(153, 255, 204);
			text(fText, x, c);
			pop();
			fHeld = false;
			f.play();
		}
		if (gHeld == true) {
			var gText = "cheese";
			push();
			textSize(25);
			fill(255, 204, 153);
			text(gText, x, c);
			pop();
			gHeld = false;
			g.play();
		}
		if (hHeld == true) {
			var hText = "snip";
			push();
			textSize(25);
			fill(255);
			text(hText, x, c);
			pop();
			hHeld = false;
			h.play();
		}
		if (jHeld == true) {
			var jText = "light";
			push();
			textSize(25);
			fill(179, 134, 0);
			text(jText, x, c);
			pop();
			jHeld = false;
			j.play();
		}
		if (kHeld == true) {
			var kText = "click";
			push();
			textSize(25);
			fill(204, 51, 255);
			text(kText, x, c);
			pop();
			kHeld = false;
			k.play();
		}
		if (lHeld == true) {
			var lText = "spray";
			push();
			textSize(25);
			fill(255, 102, 153);
			text(lText, x, c);
			pop();
			lHeld = false;
			l.play();
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
  if (key === "a"){ aHeld = true; }
  if (key === "s"){ sHeld = true; }
  if (key === "d"){ dHeld = true; }
  if (key === "f"){ fHeld = true; }
  if (key === "g"){ gHeld = true; }
  if (key === "h"){ hHeld = true; }
  if (key === "j"){ jHeld = true; }
  if (key === "k"){ kHeld = true; }
  if (key === "l"){ lHeld = true; }
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
