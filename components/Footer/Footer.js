import styles from "./Footer.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import previousEditions from "./previous-editions.json";
import logoVisap from "../../images/logo-white.svg";
import logoVis from "../../images/logo-vis.svg";
import logoTwitter from "../../images/logo-twitter.png";

import classNames from "classnames";
import Link from "next/link";

import ExportedImage from "next-image-export-optimizer";

import logoAutodesk from "../../images/logo-autodesk-white.svg";
import logoUniVictoria from "../../images/logo_UNI_VICT_CS.jpeg";

export default function Footer() {
	const hostName = "https://visap.net" || "https://ieee-vis-arts-program.github.io";
	previousEditions.map((d) => {
		d.fullUrl = d.url.includes("https://") ? d.url : hostName + d.url;
	});
	return (
		<Container className={classNames(styles.footer, "pt-4")} fluid>
			<Container>
				<Row>
					<Col xs={6} md={4} lg={3} xl={3} className={classNames("mb-4")}>
						<div className={classNames("")}>
							<img className={classNames(styles.logo)} src={logoVisap.src} alt="VISAP2022 logo" />
							<div className={classNames(styles.navigation)}>
								<Link href="/">Home</Link>
								<Link href="/contributions">Contributions</Link>
								<Link href="/programme">Programme</Link>
								<Link href="/organizers">Organizers</Link>
								<Link href="/call-for-entries">Call for Entries</Link>
								<Link href="/submission">Submission</Link>
							</div>
							<div className={classNames("mt-4")}>
								<a href="http://ieeevis.org/year/2022/welcome">
									<img src={logoVis.src} style={{ width: "2rem" }} alt="IEEE VIS logo" className={classNames("me-2")} />
								</a>
								<a href="https://twitter.com/visapnet">
									<img src={logoTwitter.src} style={{ width: "2rem" }} alt="Twitter logo" />
								</a>
							</div>
						</div>
					</Col>
					<Col xs={6} md={4} lg={4} xl={6} className={classNames("mb-4")}>
						<h6 className={classNames("mb-3", "text-gradient")}>Sponsors</h6>
						<div style={{ width: "100%", maxWidth: 300 }}>
							<ExportedImage src={logoAutodesk} alt="Autodesk Sponsorship" layout="responsive" />
							<ExportedImage src={logoUniVictoria} alt="Autodesk Sponsorship" layout="responsive" />
						</div>
					</Col>
					<Col xs={6} md={4} lg={3} xl={3} className={classNames("mb-4")}>
						<h6 className={classNames("mb-3", "text-gradient")}>Previous editions</h6>
						<p>
							{previousEditions.map((d, i) => (
								<span key={d.label}>
									<a href={d.fullUrl} className={classNames("")}>
										{d.label}
									</a>
									{i < previousEditions.length - 1 && <>, </>}
								</span>
							))}
						</p>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
