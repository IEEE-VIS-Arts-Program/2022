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
					<Col md={3}>
						<img src={logoVisap.src} className={classNames("mb-3")} alt="VISAP22 logo" />
						<p>The IEEEVIS 2022 Art Program</p>
						<p>Dates October 2022</p>
						<p>Hybrid format</p>
						<img src={logoVis.src} style={{ width: "2rem" }} alt="IEEE VIS logo" />
						<img src={logoTwitter.src} style={{ width: "2rem" }} alt="Twitter logo" />
					</Col>
					<Col md={6}>
						<h4 className={classNames("mb-3", "text-gradient")}>Sponsors</h4>
						<p>TBA</p>
					</Col>
					<Col md={3}>
						<h4 className={classNames("mb-3", "text-gradient")}>
							Previous editions
						</h4>
						<p>
							{previousEditions.map((d, i) => (
								<>
									<a key={d.label} href={d.url} className={classNames("")}>
										{d.label}
									</a>
									{i < previousEditions.length - 1 && <>, </>}
								</>
							))}
						</p>
					</Col>
				</Row>
				{/* <Row>
					<Col className="text-center">IEEE VIS – VISAP2022</Col>
				</Row> */}
			</Container>
		</Container>
	);
}
