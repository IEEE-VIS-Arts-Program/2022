import dynamic from "next/dynamic";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
	ssr: false,
});

let d1,
	d2,
	k = 3,
	inc = 0.002,
	color1 = "#fba0bf",
	zoff1 = 0,
	offset1X = 0,
	offset1Y = 2000,
	color2 = "#00adef",
	zoff2 = 1000,
	offset2X = 3000,
	offset2Y = 4000;

export default function MinglingCircles() {
	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
		d1 = d2 = p5.windowWidth / k;
		p5.blendMode(p5.MULTIPLY);
	};

	const draw = (p5) => {
		p5.clear();
		p5.noStroke();
		p5.blendMode(p5.MULTIPLY);
		p5.noStroke();
		// 1st blob
		p5.push();
		p5.fill(color1);
		const x1 = p5.noise(offset1X) * p5.width;
		const y1 = p5.noise(offset1Y) * p5.height * 0.65;
		p5.translate(x1, y1);
		// p5.ellipse(0, 0, d1);
		p5.beginShape();
		for (let a = 0; a <= p5.TWO_PI; a += 0.1) {
			const xoff = p5.map(p5.cos(a), -1, 1, 0.5, 1);
			const yoff = p5.map(p5.sin(a), -1, 1, 0.5, 1);
			const r = p5.noise(xoff, yoff, zoff1) * d1;
			const x = r * p5.cos(a);
			const y = r * p5.sin(a);
			p5.vertex(x, y);
		}
		p5.endShape(p5.CLOSE);
		zoff1 += inc;
		p5.ellipse(0, 0, d1);
		offset1X += inc;
		offset1Y += inc;
		p5.pop();

		// 2nd blob
		p5.push();
		p5.blendMode(p5.MULTIPLY);
		p5.fill(color2);
		const x2 = p5.noise(offset2X) * p5.width;
		const y2 = p5.noise(offset2Y) * p5.height * 0.65;
		p5.translate(x2, y2);
		// p5.ellipse(0, 0, d2);
		p5.beginShape();
		for (let a = 0; a <= p5.TWO_PI; a += 0.1) {
			const xoff = p5.map(p5.cos(a), -1, 1, 0.5, 1);
			const yoff = p5.map(p5.sin(a), -1, 1, 0.5, 1);
			const r = p5.noise(xoff, yoff, zoff2) * d2;
			const x = r * p5.cos(a);
			const y = r * p5.sin(a);
			p5.vertex(x, y);
		}
		p5.endShape(p5.CLOSE);
		zoff2 += inc;

		offset2X += inc;
		offset2Y += inc;
		p5.pop();
	};

	const windowResized = (p5) => {
		p5.resizeCanvas(window.innerWidth, window.innerHeight);
		d1 = d2 = p5.windowWidth / k;
	};

	return (
		<>
			<Sketch style={{ filter: "blur(min(3vw, 30px))", position: "absolute", zIndex: -1 }} setup={setup} draw={draw} windowResized={windowResized} />
		</>
	);
}