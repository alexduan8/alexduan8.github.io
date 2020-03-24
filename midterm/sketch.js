var state;
var Width = 800;
var Height = 600;
let q, w, e, r, t, y, u, i, o, p;
/*let a, s, d, f, g, h, j, k, l;
let z, x, c, v, b, n, m;
*/
let upHeld;
let qHeld, wHeld, eHeld, rHeld, tHeld, yHeld, uHeld, iHeld, oHeld, pHeld;
/*let aHeld, sHeld, dHeld, fHeld, gHeld, hHeld, jHeld, kHeld, lHeld;
let zHeld, xHeld, cHeld, vHeld, bHeld, nHeld, mHeld;*/

function preload(){
	q = loadSound("waterdrop.mp3");
	w = loadSound("click.mp3");
	e = loadSound("space.mp3");
	r = loadSound("switch.mp3");
	t = loadSound("flick.mp3");
	y = loadSound("paper.mp3");
	u = loadSound("soda.mp3");
	i = loadSound("snap.mp3");
	o = loadSound("rubberband.mp3");
	p = loadSound("hand.mp3");
}
function setup() {
	createCanvas(Width, Height);
}
function draw() {
	var displayText = "Press UP to start. Press any key to make an ASMR noise";
	if (upHeld == true) {
		state = 1;
	}
  }
	if(state == 1) {
		background(255);
		if (qHeld == true) {
			q.play();
		}
		if (wHeld == true) {
			w.play();
		}
		if (eHeld == true) {
			e.play();
		}
		if (rHeld == true) {
			r.play();
		}
		if (tHeld == true) {
			t.play();
		}
		if (yHeld == true) {
			y.play();
		}
		if (uHeld == true) {
			u.play();
		}
		if (iHeld == true) {
			i.play();
		}
		if (oHeld == true) {
			o.play();
		}
		if (pHeld == true) {
			p.play();
		}
	}

}
function keyPressed() {
	print(key + " pressed.");
	if (key === "ArrowUp"){ upHeld = true; }
	if (key === "81"){ qHeld = true; }
	if (key === "87"){ wHeld = true; }
	if (key === "69"){ eHeld = true; }
	if (key === "82"){ rHeld = true; }
	if (key === "84"){ tHeld = true; }
	if (key === "89"){ yHeld = true; }
	if (key === "85"){ uHeld = true; }
	if (key === "73"){ iHeld = true; }
	if (key === "79"){ oHeld = true; }
	if (key === "80"){ pHeld = true; }
}

function keyReleased() {
	print(key + " released.");
	if (key === "ArrowUp"){ upHeld = false; }
	if (key === "81"){ qHeld = false; }
	if (key === "87"){ wHeld = false; }
	if (key === "69"){ eHeld = false; }
	if (key === "82"){ rHeld = false; }
	if (key === "84"){ tHeld = false; }
	if (key === "89"){ yHeld = false; }
	if (key === "85"){ uHeld = false; }
	if (key === "73"){ iHeld = false; }
	if (key === "79"){ oHeld = false; }
	if (key === "80"){ pHeld = false; }
}
