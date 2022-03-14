let txt = "IEEE VISAP 20";
let txts = [];
let letters = []; 
let col1, col2; 
let noises = [];
let font; 
let ac;
let exhibit;
let img_count = [];

function preload(){
	font = loadFont('./fonts/Moderat/Moderat-Regular.otf');
	exhibit = loadTable('./csv/IEEE VISAP20 catalog material 090920.csv', 'csv', 'header');
}

function setup() {
	var cv = createCanvas(240, 110);
	textSize(33);

	init();
	cv.parent('gtco-logo');
	cursor('pointer');
	for(let i=0; i<12; i++){
		var dv = createDiv();
		dv.id("ex"+i);
		dv.class('exhibit_box');
		var dv1 = createDiv();
		var img = exhibit.getColumn("Project Image")[i];
		var imgs = img.split(", ");
		img_count[i] = imgs.length;
		for(let j=0; j<imgs.length; j++){
			var di = createImg("./IEEEVISAP_artwork_images/"+imgs[j],'not loaded');
			di.id("ex"+i+"_im"+j);
			dv1.class('content');
			if(j>0) di.style('display', 'none');
			else di.style('display', 'initial');
			di.parent(dv1);
		}
		var dv2 = createDiv();
		var dp = createP();
		var ds1 = createSpan("<i>"+exhibit.getColumn("Artwork title")[i]+"</i> ("+exhibit.getColumn("Year")[i]+")<br>");
		
		
		if(exhibit.getColumn("Artist website")[i]){
			var ds2 = createSpan(exhibit.getColumn("Artist(s)")[i]+"<br>"
		+"<a href='"+exhibit.getColumn("Artist website")[i]+"' target='_blank' id='nobold'>"+exhibit.getColumn("Artist website")[i]+"</a><br>"	
		+"–<br>"); 
		} else{
			var ds2 = createSpan(exhibit.getColumn("Artist(s)")[i]+"<br>"
		+"–<br>"); 
		}
		var ds3 = createSpan("show more");
		var ds4 = createSpan(""+exhibit.getColumn("Artwork description (150)")[i]+"<br>–<br>");
		var ds5= createSpan("");
		var ds6 = createSpan("<a href='"+exhibit.getColumn("Youtube")[i]+"' target='_blank' style='border:none;color:#fc0'>view video</a><br>–<br>");
		ds1.parent(dp);
		ds1.id("ex"+i+"_ds1");
		ds2.parent(dp);
		ds2.id("ex"+i+"_ds2");
		ds4.parent(dp);
		ds4.id("ex"+i+"_ds4");
		ds6.parent(dp);
		ds6.id("ex"+i+"_ds6");
		ds5.parent(dp);
		ds5.id("ex"+i+"_ds5");
		
		ds3.parent(dp);
		ds3.id("ex"+i+"_ds3");
		
		ds3.style('opacity:0.5; cursor:pointer');
		ds4.style('display:none');
		ds5.style('display:none');
		ds6.style('display:none');

		dp.parent(dv2);
		dv2.class('text');
		dv2.position();
		dv1.parent(dv);
		dv2.parent(dv);
		if(exhibit.getColumn("Project category")[i]=="Installation")dv.parent('installation');
		if(exhibit.getColumn("Project category")[i]=="Performance")dv.parent('performance');
	}
	for(let i=0; i<12; i++){
		ds3[i] = select('#ex'+i+'_ds3').mousePressed(high);
	}
}

function high(){

	ds4 = select("#"+this.elt.id.split("_")[0]+"_ds4");
	ds5 = select("#"+this.elt.id.split("_")[0]+"_ds5");
	ds6 = select("#"+this.elt.id.split("_")[0]+"_ds6");
	e = this.elt.id.split("_")[0];
	e = e.split("ex")[1];
	if(this.elt.innerHTML=="show more") {
		this.elt.innerHTML = "hide";
		ds4.style("display:initial");
		ds5.style("display:initial");
		ds6.style("display:initial");
		
		for(let i=0; i<img_count[e]; i++){
			img = select("#"+this.elt.id.split("_")[0]+"_im"+i);
			img.style("display:initial");
		}

	}
	else {
		this.elt.innerHTML="show more"
		ds4.style("display:none");
		ds5.style("display:none; color:var(--accent);");
		ds6.style("display:none; color:var(--accent);");

		for(let i=1; i<img_count[e]; i++){
			img = select("#"+this.elt.id.split("_")[0]+"_im"+i);
			img.style("display:none");
		}
	}
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

