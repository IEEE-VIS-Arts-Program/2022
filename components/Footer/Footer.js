import styles from "./Footer.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import previousEditions from "./previous-editions.json";
import Colophon from "../Colophon";

import logoVisap from "../../images/logo-white.svg";
import logoVis from "../../images/logo-vis.svg";
import logoTwitter from "../../images/logo-twitter.png";

import classNames from "classnames";

export default function Footer() {
	return (
		<Container className={classNames(styles.footer, "pt-4", "py-4")} fluid>
			<Row>
				<Col md={{ span: 3 }}>
					<div className={classNames("ps-3")} style={{ top: "3.5rem" }}>
						<Colophon lightVariant={true} />
						<div className={classNames("pt-2")}>
							<a href="http://ieeevis.org/year/2022/welcome">
								<img
									src={logoVis.src}
									style={{ width: "2rem" }}
									alt="IEEE VIS logo"
									className={classNames("me-2")}
								/>
							</a>
							<a href="https://twitter.com/visapnet">
								<img
									src={logoTwitter.src}
									style={{ width: "2rem" }}
									alt="Twitter logo"
								/>
							</a>
						</div>
					</div>
				</Col>
				{/* <Col md={6}>
					<h4 className={classNames("mb-3", "text-gradient")}>Sponsors</h4>
					<p>TBA</p>
				</Col> */}
				<Col md={6}>
					<h5 className={classNames("mb-3", "text-gradient")}>
						Previous editions
					</h5>
					<p>
						{previousEditions.map((d, i) => (
							<span key={d.label}>
								<a href={d.url} className={classNames("")}>
									{d.label}
								</a>
								{i < previousEditions.length - 1 && <>, </>}
							</span>
						))}
					</p>
				</Col>
			</Row>
		</Container>
	);
}
