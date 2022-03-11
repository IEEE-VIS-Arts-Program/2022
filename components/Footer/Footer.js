import styles from "./Footer.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import previousEditions from "./previous-editions.json";

import logoVisap from "../../images/logo-white.svg";
import logoVis from "../../images/logo-vis.svg";
import logoTwitter from "../../images/logo-twitter.png";

import classNames from "classnames";

export default function Footer() {
	return (
		<Container className={classNames(styles.footer, "py-4")} fluid>
			<Container>
				<Row>
					<Col>
						<img src={logoVisap.src} className={classNames("mb-3")} />
						<p>The IEEEVIS 2022 Art Program</p>
						<p>Dates October 2022</p>
						<p>Hybrid format</p>
						<img src={logoVis.src} style={{ width: "2rem" }} />
						<img src={logoTwitter.src} style={{ width: "2rem" }} />
					</Col>
					<Col>
						<h5>Sponsors</h5>
					</Col>
					<Col>
						<h5>Previous editions</h5>
						{previousEditions.map((d) => (
							<a key={d.label} href={d.url}>
								<p>{d.label}</p>
							</a>
						))}
					</Col>
				</Row>
				<Row>
					<Col className="text-center">IEEE VIS – VISAP2022</Col>
				</Row>
			</Container>
		</Container>
	);
}
