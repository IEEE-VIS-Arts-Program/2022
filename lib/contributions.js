import fs from "fs";
import path from "path";
const sizeOf = require("image-size");

const postsDirectory = path.join(process.cwd(), "data");

export function getContributionsData() {
	const contributionsPath = path.join(postsDirectory, "contributions.json");
	let contributionsData = JSON.parse(fs.readFileSync(contributionsPath, "utf8"));

	const authorsPath = path.join(postsDirectory, "authors.json");
	const authorsData = JSON.parse(fs.readFileSync(authorsPath, "utf8"));

	contributionsData.forEach((d) => {
		d.images = d.images.split(";").map((image, i) => {
			try {
				const imagePath = path.join("public/images/contributions-media", d.pc_id, image);
				const dimensions = sizeOf(imagePath);
				return { src: image, width: dimensions.width, height: dimensions.height };
			} catch (err) {
				console.log(d.pc_id, image);
				console.log(err);
				return { src: image, width: 1, height: 1 };
			}
		});
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

	singleData.images = singleData.images.split(";").map((d, i) => {
		try {
			const imagePath = path.join("public/images/contributions-media", singleData.pc_id, d);
			const dimensions = sizeOf(imagePath);
			return { src: d, width: dimensions.width, height: dimensions.height };
		} catch (err) {
			console.log(singleData.pc_id, d);
			console.log(err);
			return { src: d, width: 1, height: 1 };
		}
	});

	let authors_ids = singleData.authors.split(";");
	singleData.authors = authors_ids.map((id) => {
		const author = authorsData.find((a) => a.id === id);
		if (author.images) {
			author.images = author.images.split(";").map((imageName, i) => {
				const imagePath = path.join("public/images/contributions-media", singleData.pc_id, imageName);
				const dimensions = sizeOf(imagePath);
				return {
					src: imageName,
					width: dimensions.width,
					height: dimensions.height,
				};
			});
		}
		return author;
	});

	return singleData;
}
