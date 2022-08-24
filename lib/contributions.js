import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "data");

export function getContributionsData() {
	const contributionsPath = path.join(postsDirectory, "contributions.json");
	let contributionsData = JSON.parse(fs.readFileSync(contributionsPath, "utf8"));

	const authorsPath = path.join(postsDirectory, "authors.json");
	const authorsData = JSON.parse(fs.readFileSync(authorsPath, "utf8"));

	contributionsData.forEach((d) => {
		let authors_ids = d.authors.split(";");
		d.authors = authors_ids.map((id) => authorsData.find((a) => a.id === id));
		return d;
	});

	return contributionsData;
}

export function getIds() {
	const contributionsPath = path.join(postsDirectory, "contributions.json");
	const contributionsData = JSON.parse(fs.readFileSync(contributionsPath, "utf8"));
	return contributionsData.map((d) => {
		return {
			params: {
				id: d.id.toString(),
			},
		};
	});
}

export function getSingleData(id) {
	const contributionsPath = path.join(postsDirectory, "contributions.json");
	const contributionsData = JSON.parse(fs.readFileSync(contributionsPath, "utf8"));
	const authorsPath = path.join(postsDirectory, "authors.json");
	const authorsData = JSON.parse(fs.readFileSync(authorsPath, "utf8"));

	const singleData = contributionsData.find((d) => d.id.toString() === id.toString());
	let authors_ids = singleData.authors.split(";");
	singleData.authors = authors_ids.map((id) => authorsData.find((a) => a.id === id));

	return singleData;
}
