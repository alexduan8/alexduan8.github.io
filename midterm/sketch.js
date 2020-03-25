var state;
let begin;
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
  textFont("Courier New");
  state = 0;
	begin = millis();   
}
function draw() {
	var displayText = "Press UP to start. Press any key to make an ASMR noise";
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
    for (var x = 0; x < displayText.length; x++) {
      var floatyHeight = sin(x*0.1+(millis()*0.001)) * 50;
      text(displayText[x], (width/displayText.length-1)*(x+1), (height/2) + floatyHeight);
    }
		pop();
		push();
		fill("#ff0072");
		textSize(20);
    textAlign(CENTER);
		pop();
  }
	if(state == 1) {
		background(100);
		if (qHeld == true) {
			qHeld = false;
			q.play();
		}
		if (wHeld == true) {
			wHeld = false;
			w.play();
		}
		if (eHeld == true) {
			eHeld = false;
			e.play();
		}
		if (rHeld == true) {
			rHeld = false;
			r.play();
		}
		if (tHeld == true) {
			tHeld = false;
			t.play();
		}
		if (yHeld == true) {
			yHeld = false;
			y.play();
		}
		if (uHeld == true) {
			uHeld = false;
			u.play();
		}
		if (iHeld == true) {
			iHeld = false;
			i.play();
		}
		if (oHeld == true) {
			oHeld = false;
			o.play();
		}
		if (pHeld == true) {
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
