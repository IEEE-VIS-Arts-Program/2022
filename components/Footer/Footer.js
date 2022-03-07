import styles from "./Footer.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import previousEditions from "./previous-editions.json";

export default function Footer() {
	return (
		<Container className={styles.footer} fluid>
			<Container>
				<Row>
					<Col><h5>Logo</h5></Col>
					<Col><h5>Sponsors</h5></Col>
					<Col>
						<h5>Previous editions</h5>
						{previousEditions.map(d=><p key={d.label}>{d.label}</p>)}
					</Col>
				</Row>
				<Row>
					<Col className="text-center">IEEE VIS – VISAP2022</Col>
				</Row>
			</Container>
		</Container>
	);
}
