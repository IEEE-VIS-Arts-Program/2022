import PageTemplate from "../components/PageTemplate/PageTemplate";
// import organizersJson from "../data/VISAP2022 - Organizers - People.json";
import programmeData from "../data/programme.json";
import classNames from "classnames";
import InteractiveLogo from "../components/InteractiveLogo";

export default function Programme() {
	return (
		<PageTemplate metaTitle="Organizers">
			<h1 className={classNames("Xtext-gradient", "page-title")}>Programme</h1>
			<h2>TBA</h2>
			<InteractiveLogo />
		</PageTemplate>
	);
}
