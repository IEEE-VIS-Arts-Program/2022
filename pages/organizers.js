import PageTemplate from "../components/PageTemplate/PageTemplate";
import { groups } from "d3";
import { useEffect, useState } from "react";
import organizersJson from "../data/VISAP2022 - Organizers - People.json";
import classNames from "classnames";

export default function Organizers() {
	const [organizers, setOrganizers] = useState([]);
	useEffect(() => {
		const organizedOrganizers = groups(organizersJson, (d) => d["Role"]);
		setOrganizers(organizedOrganizers);
	}, []);
	return (
		<PageTemplate metaTitle="Organizers">
			<h1 className={classNames("text-gradient")}>Organizers</h1>
			{organizers.map((role, i) => (
				<div key={i} className={classNames("mb-5")}>
					<h5>{role[0]}</h5>
					{role[1].map((person, i) => (
						<div key={i}>
							<p className={classNames("mb-2")}>
								{person["Name"]} – <i>{person["Affiliation"]}</i>
								<br />
								<a href={person["Website"]} style={{textTransform:"initial"}}>Personal website</a>
							</p>
						</div>
					))}
				</div>
			))}
		</PageTemplate>
	);
}
