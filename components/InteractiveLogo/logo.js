import * as d3 from "d3";
import data from "./data.json";

let _container,
	node,
	link,
	svg,
	width,
	height,
	r = 25,
	l = 65,
	dist = 40;
let simulation = d3.forceSimulation().on("tick", tick).stop();

function initLogo(container) {
	_container = container;
	d3.select(_container).selectAll("*").remove();
	svg = d3.select(_container).append("svg");
	node = svg.selectAll(".node");
	link = svg.selectAll(".link");
	update(data);
}

function update(data) {
	const bbox = _container.getBoundingClientRect();

	width = bbox.width;
	height = bbox.height;

	l = d3.min([120, width / 9]);
	r = l / 3;
	dist = l * 0.6;
	// console.log(width);
	// console.log(l, r, dist);

	svg.attr("width", width).attr("height", height);

	link = link.data(data.links, (d) => d.source + "-" + d.target);
	link.exit().remove();
	link = link.enter().append("line").merge(link).attr("stroke", "transparent");

	node = node.data(data.nodes, (d, i) => {
		d.x = d.xPercent * width;
		d.y =
			i < 8
				? d3.randomUniform(height * 0.25, height * 0.65)()
				: d3.randomUniform(height * 0.35, height * 0.75)();
		return d.index;
	});
	node.exit().remove();
	node = node
		.enter()
		.append("image")
		.classed("letter", true)
		.merge(node)
		.attr("href", (d) => {
			const name = "letter" + d.index;
			const path = "/lettering/" + name + ".png";
			return path;
		})
		.attr("width", l / 10)
		.attr("height", l / 10)
		.attr("x", (d) => d.x)
		.attr("y", (d) => d.y)
		.attr("transform", `translate(-${l / 10 / 2},-${l / 10 / 2})`)
		.text((d) => d.label)
		.style("opacity", 0)
		.style("cursor", "grab")
		.call(drag(simulation))
		.on("mouseover", function (d) {
			d3.select(this).style("cursor", "grab");
		});

	node
		.transition()
		.duration(750)
		.delay((d, i) => i * 75)
		.ease(d3.easeElasticOut.amplitude(0.35).period(0.65))
		.style("opacity", 1)
		.attr("width", l)
		.attr("height", l)
		.attr("transform", `translate(-${l / 2},-${l / 2})`);

	simulation
		.nodes(data.nodes)
		.force("charge", d3.forceManyBody().strength(-width / 2))
		.force("link", d3.forceLink().links(data.links).distance(dist))
		// .force("collision", d3.forceCollide(r))
		.force("center", d3.forceCenter(width / 2, height / 2))
		.alpha(1)
		.restart();
}

function tick() {
	node
		.each((d) => {
			d.x = d.x < l / 2 ? l / 2 : d.x;
			d.x = d.x > width - l / 2 ? width - l / 2 : d.x;
			d.y = d.y < l / 2 ? l / 2 : d.y;
			d.y = d.y > height - l / 2 ? height - l / 2 : d.y;
		})
		.attr("x", (d) => d.x)
		.attr("y", (d) => d.y);
	link
		.attr("x1", (d) => d.source.x)
		.attr("y1", (d) => d.source.y)
		.attr("x2", (d) => d.target.x)
		.attr("y2", (d) => d.target.y);
}

function drag(simulation) {
	function dragstarted(event) {
		if (!event.active) simulation.alpha(0.3).alphaTarget(0.3).restart();
		link.attr("stroke", "#fafafa");
		node.style("cursor", "grabbing");
		event.subject.fx = event.subject.x;
		event.subject.fy = event.subject.y;
	}

	function dragged(event) {
		event.subject.fx = event.x;
		event.subject.fy = event.y;
	}

	function dragended(event) {
		if (!event.active) simulation.alphaTarget(0);
		link.attr("stroke", "transparent");
		event.subject.fx = null;
		event.subject.fy = null;
	}

	return d3
		.drag()
		.on("start", dragstarted)
		.on("drag", dragged)
		.on("end", dragended);
}

export { initLogo };
