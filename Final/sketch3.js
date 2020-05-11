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
		background(0);
		if (qHeld == true) {
			var qText = "drop";
			push();
			textSize(15);
			fill(168, 235, 254);
			text(qText, randWidth, randHeight);
			pop();
			qHeld = false;
			q.play();
		}
		if (wHeld == true) {
			var wText = "click";
			push();
			textSize(20);
			fill(255);
			text(wText, randWidth, randHeight);
			pop();
			wHeld = false;
			w.play();
		}
		if (eHeld == true) {
			var eText = "pop";
			push();
			textSize(15);
			fill(255, 254, 146);
			text(eText, randWidth, randHeight);
			pop();
			eHeld = false;
			e.play();
		}
		if (rHeld == true) {
			var rText = "switch";
			push();
			textSize(15);
			fill(153, 255, 204);
			text(rText, randWidth, randHeight);
			pop();
			rHeld = false;
			r.play();
		}
		if (tHeld == true) {
			var tText = "flick";
			push();
			textSize(25);
			fill(255, 204, 153);
			text(tText, randWidth, randHeight);
			pop();
			tHeld = false;
			t.play();
		}
		if (yHeld == true) {
			var yText = "paper";
			push();
			textSize(25);
			fill(255);
			text(yText, randWidth, randHeight);
			pop();
			yHeld = false;
			y.play();
		}
		if (uHeld == true) {
			var uText = "soda";
			push();
			textSize(25);
			fill(179, 134, 0);
			text(uText, randWidth, randHeight);
			pop();
			uHeld = false;
			u.play();
		}
		if (iHeld == true) {
			var iText = "snap";
			push();
			textSize(25);
			fill(204, 51, 255);
			text(iText, randWidth, randHeight);
			pop();
			iHeld = false;
			i.play();
		}
		if (oHeld == true) {
			var oText = "rubberband";
			push();
			textSize(25);
			fill(255, 102, 153);
			text(oText, randWidth, randHeight);
			pop();
			oHeld = false;
			o.play();
		}
		if (pHeld == true) {
			var pText = "hand";
			push();
			textSize(25);
			fill(255, 153, 153);
			text(pText, randWidth, randHeight);
			pop();
			pHeld = false;
			p.play();
		}
    if (aHeld == true) {
			var aText = "cards";
			push();
			textSize(15);
			fill(168, 235, 254);
			text(aText, randWidth, randHeight);
			pop();
			aHeld = false;
			a.play();
		}
		if (sHeld == true) {
			var sText = "ice";
			push();
			textSize(20);
			fill(255);
			text(sText, randWidth, randHeight);
			pop();
			sHeld = false;
			s.play();
		}
		if (dHeld == true) {
			var dText = "button";
			push();
			textSize(15);
			fill(255, 254, 146);
			text(dText, randWidth, randHeight);
			pop();
			dHeld = false;
			d.play();
		}
		if (fHeld == true) {
			var fText = "pen";
			push();
			textSize(15);
			fill(153, 255, 204);
			text(fText, randWidth, randHeight);
			pop();
			fHeld = false;
			f.play();
		}
		if (gHeld == true) {
			var gText = "cheese";
			push();
			textSize(25);
			fill(255, 204, 153);
			text(gText, randWidth, randHeight);
			pop();
			gHeld = false;
			g.play();
		}
		if (hHeld == true) {
			var hText = "snip";
			push();
			textSize(25);
			fill(255);
			text(hText, randWidth, randHeight);
			pop();
			hHeld = false;
			h.play();
		}
		if (jHeld == true) {
			var jText = "light";
			push();
			textSize(25);
			fill(179, 134, 0);
			text(jText, randWidth, randHeight);
			pop();
			jHeld = false;
			j.play();
		}
		if (kHeld == true) {
			var kText = "click";
			push();
			textSize(25);
			fill(204, 51, 255);
			text(kText, randWidth, randHeight);
			pop();
			kHeld = false;
			k.play();
		}
		if (lHeld == true) {
			var lText = "spray";
			push();
			textSize(25);
			fill(255, 102, 153);
			text(lText, randWidth, randHeight);
			pop();
			lHeld = false;
			l.play();
		}
		if (zHeld == true) {
			var zText = "sweep";
			push();
			textSize(15);
			fill(168, 235, 254);
			text(zText, randWidth, randHeight);
			pop();
			zHeld = false;
			z.play();
		}
		if (xHeld == true) {
			var xText = "rip";
			push();
			textSize(20);
			fill(255);
			text(xText, randWidth, randHeight);
			pop();
			xHeld = false;
			x.play();
		}
		if (cHeld == true) {
			var cText = "crunch";
			push();
			textSize(15);
			fill(255, 254, 146);
			text(cText, randWidth, randHeight);
			pop();
			cHeld = false;
			c.play();
		}
		if (vHeld == true) {
			var vText = "shake";
			push();
			textSize(15);
			fill(153, 255, 204);
			text(vText, randWidth, randHeight);
			pop();
			vHeld = false;
			v.play();
		}
		if (bHeld == true) {
			var bText = "rustle";
			push();
			textSize(25);
			fill(255, 204, 153);
			text(bText, randWidth, randHeight);
			pop();
			bHeld = false;
			b.play();
		}
		if (nHeld == true) {
			var nText = "swish";
			push();
			textSize(25);
			fill(255);
			text(nText, randWidth, randHeight);
			pop();
			nHeld = false;
			n.play();
		}
		if (mHeld == true) {
			var mText = "flip";
			push();
			textSize(25);
			fill(179, 134, 0);
			text(mText, randWidth, randHeight);
			pop();
			mHeld = false;
			m.play();
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
	if (key === "z"){ zHeld = true; }
  if (key === "x"){ xHeld = true; }
  if (key === "c"){ cHeld = true; }
  if (key === "v"){ vHeld = true; }
  if (key === "b"){ bHeld = true; }
  if (key === "n"){ nHeld = true; }
  if (key === "m"){ jmHeld = true; }
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
