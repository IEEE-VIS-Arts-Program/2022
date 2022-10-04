import PageTemplate from "../components/PageTemplate/PageTemplate";
import { groups } from "d3";
import { useEffect, useState } from "react";
// import organizersJson from "../data/VISAP2022 - Organizers - People.json";
import peopleData from "../data/people.json";
import classNames from "classnames";

export default function Organizers() {
	const [people, setPeople] = useState([]);
	useEffect(() => {
		const peopleDataRoles = groups(peopleData, (d) => d["role"]);
		setPeople(peopleDataRoles);
	}, []);
	return (
		<PageTemplate metaTitle="Organizers">
			<h1 className={classNames("Xtext-gradient", "page-title")}>Organizers</h1>
			{people.map((role, i) => (
				<div key={i} className={classNames("mb-5")}>
					<h5>{role[0]}</h5>
					{role[1].map((person, i) => (
						<div key={i}>
							<p className={classNames("mb-2")}>
								{person["name"]} {person["surname"]}
								{person["affiliation"] && (
									<>
										{" "}– <i>{person["affiliation"]}</i>
									</>
								)}
								{person["website"] && (
									<>
										<br />
										<a href={person["website"]} style={{ textTransform: "initial" }}>
											{person["website"].replace("https://", "").replace("http://", "").replace("www.", "")}
										</a>
									</>
								)}
							</p>
						</div>
					))}
				</div>
			))}
		</PageTemplate>
	);
}
