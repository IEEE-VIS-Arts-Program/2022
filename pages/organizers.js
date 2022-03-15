import PageTemplate from "../components/PageTemplate/PageTemplate";
import { Col, Container, Row } from "react-bootstrap";
import Colophon from "../components/Colophon";
import { tsvParse, groups } from "d3";
import { useEffect, useState } from "react";
import organizersJson from "../data/VISAP2022 - Organizers - People.json";

export default function Organizers() {
	const [organizers, setOrganizers] = useState([]);
	useEffect(() => {
		const organizedOrganizers = groups(organizersJson, (d) => d["Role"]);
		setOrganizers(organizedOrganizers);
	}, []);
	return (
		<PageTemplate metaTitle="Organizers">
			<Container fluid>
				<Row>
					<Col md={{ span: 6, offset: 3 }}>
						{organizers.map((role, i) => (
							<div key={i}>
								<h5>{role[0]}</h5>
								{role[1].map((person, i) => (
									<div key={i}>
                    <p>{person["Name"]}, <i>{person["Affiliation"]}</i></p>
                    <p><a href={person["Website"]}>{person["Website"]}</a></p>
                  </div>
								))}
							</div>
						))}
					</Col>
				</Row>
			</Container>
		</PageTemplate>
	);
}
