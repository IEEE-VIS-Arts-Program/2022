const fs = require("fs");
const path = require("path");

console.log("Delete copies of uncompresed images from exported site");

const mediaFolder = path.join("out/images/contributions-media");
const contributionsData = JSON.parse(fs.readFileSync("./data/contributions.json"));
const ids = contributionsData.map((d) => d.pc_id);

const regexImages = /[.]jpg$/;
let deletedCount = 0;
let problems = 0;
ids.forEach((id) => {
	const folder = path.join(mediaFolder, id);
	try {
		const images = fs.readdirSync(folder).filter((file) => {
			const is_jpg = path.extname(file).toLowerCase() === ".jpg";
			const is_jpeg = path.extname(file).toLowerCase() === ".jpeg";
			const is_png = path.extname(file).toLowerCase() === ".png";
			return is_jpg || is_jpeg || is_png;
		});
		images.forEach((image) => {
			try {
				fs.unlinkSync(path.join(folder, image));
				deletedCount++;
			} catch (err) {
				console.log("Cant delete", image);
				console.error(err);
			}
		});
	} catch (err) {
		console.log("Cant read folder", folder);
	}
});

console.log("Deleted images:", deletedCount, " Problems:", problems);
