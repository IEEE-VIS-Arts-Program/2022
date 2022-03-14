//check out instance mode for index.html...
//https://stackoverflow.com/questions/55879820/how-to-create-more-than-one-canvas-with-p5

let txt = "IEEE VISAP 20";
let txts = [];
let letters = []; 
let col1, col2; 
let noises = [];
let font; 
let ac;
let exhibition;
function preload(){
	font = loadFont('./fonts/Moderat/Moderat-Regular.otf');
}

function setup() {
	var cv = createCanvas(240, 110);
	console.log(exhibition);
	textSize(33);
	init();
	cv.parent('gtco-logo');
	cursor('pointer');
}

function mousePressed(){
	if(mouseX>0 && mouseX<width && mouseY>0 && mouseY<height) window.open('index.html', '_self');
}

function draw(){
	clear();
	ac = .4+sin(frameCount*.01)*.1;
	for (let x=0; x < width; x++) {
	    let noiseVal = noise(((sin(frameCount*.01)*200+200)*ac + x) * 0.02, 100 * 0.02);
	    noises[x] = 20+noiseVal*80;
  	}

    for(let i=0; i<letters.length; i++){
      letters[i].move();
      letters[i].display();
    }
}

function init(){
	ac = .5;
	col1 = color(0,255,0);//227, 121, 0);
	col2 = color(255,200,0);
	txts = txt.split("");
	tx = 0;
	textFont(font);
	for(let i=0; i<txts.length; i++){
		if(txts[i]!=" ") letters.push(new Letter(txts[i], tx, i));  
		tx += textWidth(txts[i]);	
	}
}

class Letter{
	constructor(is, ix, ij){
		this.n = ij;
		this.s = is;
		this.x = ix;
		this.y = 30;
		this.d = 30;
		this.c = color('#2e7d43');
		this.f = 0;
	}
	move(){
		this.d = noises[this.n*7]; 
		this.y = this.d;
	}
	display(){
		fill(lerpColor(col1, col2, map(this.d, 25, 75, 0, 1)));
		text(this.s, this.x, this.y);
		
	}
}
