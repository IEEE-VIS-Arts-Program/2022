import * as d3 from "d3";
import data from "./data.json";

let node,
	link,
	svg,
	width,
	height,
	r = 20,
	l = 65,
	d = 40;
let simulation = d3.forceSimulation().on("tick", tick).stop();

function initLogo(container) {
	const bbox = container.getBoundingClientRect();
	width = bbox.width;
	height = bbox.height;

	d3.select(container).selectAll("*").remove();

	svg = d3
		.select(container)
		.append("svg")
		.attr("width", width)
		.attr("height", height);

	node = svg.selectAll(".node");
	link = svg.selectAll(".link");

	update(data);
}

function update(data) {
	link = link.data(data.links, (d) => d.source + "-" + d.target);
	link.exit().remove();
	link = link
		.enter()
		.append("line")
		.merge(link)
		.attr("stroke", "#fafafa")
		// .attr("stroke", "#333")
		.attr("stroke", "transparent");

	node = node.data(data.nodes, (d) => d.index);
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
		.attr("width", l/10)
		.attr("height", l/10)
		.attr("transform", `translate(-${l/10 / 2},-${l/10 / 2})`)
		.text((d) => d.label)
		.style("opacity", 0)
		.call(drag(simulation));

	node
		.transition()
		.duration(750)
		.delay((d, i) => i * 75)
		.ease(d3.easeElasticOut.amplitude(0.5).period(0.5))
		.style("opacity", 1)
		.attr("width", l)
		.attr("height", l)
		.attr("transform", `translate(-${l / 2},-${l / 2})`);

	simulation
		.nodes(data.nodes)
		.force("charge", d3.forceManyBody().strength(-120))
		.force("link", d3.forceLink().links(data.links).distance(d))
		// .force("collision", d3.forceCollide(r))
		.force("center", d3.forceCenter(width / 2, height / 2))
		// .force("x", d3.forceX((d) => {
		// 	console.log(d)
		// 	return (d._x ? d._x * width : null)
		// }))
		// .force("y", d3.forceY((d) => (d._y ? d._y * height : null)))
		.alpha(1)
		.restart();

	// simulation.on("end", () => {
	// 	console.log(data.nodes);
	// });

	// simulation
	// 	.force("x")
	// 	.x(d=>d._x)
	// 	// .x((d) => (d._x ? d._x * width : null))
	// 	// .strength((d) => (d._x ? 0.1 : 0));
	// simulation
	// 	.force("y")
	// 	.y(d=>d._y)
	// 	// .y((d) => (d._y ? d._y * height : null))
	// 	// .strength((d) => (d._y ? 0.1 : 0));
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
		link.attr("stroke", "#ddd");
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
