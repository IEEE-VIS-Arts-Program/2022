import * as d3 from "d3";
import data from "./data.json";

let node,
	link,
	svg,
	width,
	height,
	r = 15;
let simulation = d3
	.forceSimulation()
	.force("charge", d3.forceManyBody().strength(-r * 10))
	.force("x", d3.forceX())
	.force("y", d3.forceY())
	.force("link", d3.forceLink())
	.force("collision", d3.forceCollide(r))
	.on("tick", tick)
  // .alphaDecay(0)
  // .velocityDecay(0.000001)
	.stop();

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

	console.log(width, height, data);

	update(data);
}

function update(data) {
	link = link.data(data.links, (d) => d.source + "-" + d.target);
	link.exit().remove();
	link = link.enter().append("line").merge(link).attr("stroke", "#fafafa");

	node = node.data(data.nodes, (d) => d.index);
	node.exit().remove();
	node = node
		.enter()
		.append("image")
		.merge(node)
		// .attr("text-anchor", "middle")
		// .attr("fill", (d, i) => (i > 7 ? "red" : "black"))
		.attr("href", (d) => {
			const name = "letter" + d.index;
			const path = "/lettering/" + name + ".png";
			console.log(path);
			return path;
		})
		.attr("width", r * 2)
		.attr("height", r * 2)
		.attr("transform", `translate(-${r},-${r})`)
		.text((d) => d.label)
		.call(drag(simulation));

	simulation.nodes(data.nodes);
	simulation.force("link").links(data.links);
	simulation.force("center", d3.forceCenter(width / 2, height / 2));
	simulation
		.force("x")
		.x((d) => (d._x ? d._x * width : null))
		.strength((d) => (d._x ? 0.1 : 0));
	simulation
		.force("y")
		.y((d) => (d._y ? d._y * height : null))
		.strength((d) => (d._y ? 0.1 : 0));
	simulation.alpha(1).restart();
}

function tick() {
	node
		.each((d) => {
      d.x=d.x<0?0:d.x;
      d.x=d.x>width?width:d.x;
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
		if (!event.active) simulation.alphaTarget(0.3).restart();
		event.subject.fx = event.subject.x;
		event.subject.fy = event.subject.y;
	}

	function dragged(event) {
		event.subject.fx = event.x;
		event.subject.fy = event.y;
	}

	function dragended(event) {
		if (!event.active) simulation.alphaTarget(0);
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
