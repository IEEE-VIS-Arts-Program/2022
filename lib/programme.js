import fs from "fs";
import path from "path";
const sizeOf = require("image-size");

const dataDirectory = path.join(process.cwd(), "data");

export function getProgrammeData() {
	const programmePath = path.join(dataDirectory, "programme.json");
	let programmeData = JSON.parse(fs.readFileSync(programmePath, "utf8"));

	let contributionsPath = path.join(dataDirectory, "contributions.json");
	let contributionsData = JSON.parse(fs.readFileSync(contributionsPath, "utf8"));

	// let authorsPath = path.join(dataDirectory, "authors.json");
	// let authorData = JSON.parse(fs.readFileSync(authorsPath, "utf8"));

	programmeData.forEach((d) => {
		if (d.pc_id) {
			const contribution = contributionsData.find((dd) => dd.pc_id == d.pc_id);
      d.contribution_id = contribution.id
			d.contribution_type = contribution.type
		}
	});
	return programmeData;
}
