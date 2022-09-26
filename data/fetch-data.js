const PublicGoogleSheetsParser = require("public-google-sheets-parser");
const fs = require("fs");

const ids = {
	authors: "1387v6tMUWEMU5r3woD7gv3BDW6nrwWt2QaFgIZbWp1E",
	contributions: "1IeLu5tu_CG-MwVnNTmWMiDz7jrgJkXCa-uyjARkcuHo",
	programme: "1B6673PzL8zZ11uwZvAnA_cvH0j7-A8ZiXdhPRzUmAKI",
	// organizers: "1uHHsAtMg7xrXUTn-D8UrG6LAMsZ9IdTgWzOldSvu0kw",
	people: "1HRqrV6U6WpMpW0FAYIWrghaYPfInKnXPiPEbjeSdtz8"
};

console.log("fetching data");

const parser = new PublicGoogleSheetsParser();

console.log("authors");
parser.parse(ids.authors).then((authors) => {
	fs.writeFileSync("./data/authors.json", JSON.stringify(authors, null, 2), { encoding: "utf8" });

	console.log("contributions");
	parser.parse(ids.contributions).then((contributions) => {
		fs.writeFileSync("./data/contributions.json", JSON.stringify(contributions, null, 2), { encoding: "utf8" });

		console.log("programme");
    parser.parse(ids.programme).then((programme) => {
      fs.writeFileSync("./data/programme.json", JSON.stringify(programme, null, 2), { encoding: "utf8" });

			console.log("people");
			parser.parse(ids.people).then((people) => {
				fs.writeFileSync("./data/people.json", JSON.stringify(people, null, 2), { encoding: "utf8" });

				// console.log("organizers");
				// parser.parse(ids.organizers).then((organizers) => {
				// 	fs.writeFileSync("./data/people.json", JSON.stringify(organizers, null, 2), { encoding: "utf8" });
				// });
			});
    });
	});
});
