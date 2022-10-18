import styles from "./Footer.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import previousEditions from "./previous-editions.json";
import logoVisap from "../../public/images/logo-white.svg";
import logoVis from "../../public/images/logo-vis.svg";
import logoTwitter from "../../public/images/logo-twitter.png";

import classNames from "classnames";
import Link from "next/link";

import ExportedImage from "next-image-export-optimizer";

import logoAutodesk from "../../public/images/logo-autodesk-white.png";
import logoUniVictoria from "../../public/images/logo_UNI_VICT_CS-white.png";
import logoIEEE from "../../public/images/ieee-logo-white.png";
import logoSchoolVisualArts from "../../public/images/School_Of_Visual_Arts_Linear_White_Web.png";
import logoCreativeInformatics from "../../public/images/logo_CI_white.png";

export default function Footer() {
	const hostName = "https://visap.net";
	previousEditions.map((d) => {
		d.fullUrl = d.url.includes("https://") ? d.url : hostName + d.url;
	});
	return (
		<Container className={classNames(styles.footer, "pt-4")} fluid>
			<Container>
				<Row>
					<Col xs={12} md={4} lg={3} xl={3} className={classNames("mb-5")}>
						<div className={classNames("")}>
							<img className={classNames(styles.logo)} src={logoVisap.src} alt="VISAP2022 logo" />
							<div className={classNames(styles.navigation)}>
								<Link href="/">Home</Link>
								<Link href="/contributions">Contributions</Link>
								<Link href="/programme">Programme</Link>
								<Link href="/organizers">Organizers</Link>
								{/* <p className={classNames("small", "m-0", "mt-5")}>Selection process</p> */}
								<Link href="/call-for-entries">Call for Entries</Link>
								<Link href="/submission">Submission instructions</Link>
							</div>
							<div className={classNames("mt-5")}>
								<a href="http://ieeevis.org/year/2022/welcome" target="_blank" rel="noreferrer">
									<img src={logoVis.src} style={{ width: "2rem" }} alt="IEEE VIS logo" className={classNames("me-2")} />
								</a>
								<a href="https://twitter.com/visapnet" target="_blank" rel="noreferrer">
									<img src={logoTwitter.src} style={{ width: "2rem" }} alt="Twitter logo" />
								</a>
							</div>
						</div>
					</Col>
					<Col xs={12} md={4} lg={4} xl={6} className={classNames("mb-5")}>
						<h6 className={classNames("mb-3", "text-gradient")}>Supporters</h6>
						<div className="logos mb-3">
								<a className="logo" href="https://www.autodesk.com/" target="_blank" rel="noreferrer">
									<ExportedImage
										src={logoAutodesk}
										alt="Autodesk Logo"
										layout="fill"
										objectFit="contain"
										objectPosition="left center"
									/>
								</a>
							</div>
							<div className="logos mb-3">
								<a className="logo" href="https://www.uvic.ca/ecs/computerscience" target="_blank" rel="noreferrer">
									<ExportedImage
										src={logoUniVictoria}
										alt="Logo of Department of computer science, University of Victoria"
										layout="fill"
										objectFit="contain"
										objectPosition="left center"
									/>
								</a>
							</div>
							<div className="logos mb-3">
								<a className="logo" href="https://www.ou.edu/finearts/visual-arts" target="_blank" rel="noreferrer">
									<ExportedImage
										src={logoSchoolVisualArts}
										alt="Logo of School of Visual Arts, University of Oklahoma"
										layout="fill"
										objectFit="contain"
										objectPosition="left center"
									/>
								</a>
							</div>
							<div className="logos mb-3">
								<a className="logo" href="http://ieeevis.org/year/2022/welcome" target="_blank" rel="noreferrer">
									<ExportedImage
										src={logoIEEE}
										alt="Logo of IEEE"
										layout="fill"
										objectFit="contain"
										objectPosition="left center"
									/>
								</a>
							</div>
							<div className="logos mb-3">
								<a className="logo" href="https://creativeinformatics.org/" target="_blank" rel="noreferrer">
									<ExportedImage
										src={logoCreativeInformatics}
										alt="Logo of Creative Informatics"
										layout="fill"
										objectFit="contain"
										objectPosition="left center"
									/>
								</a>
							</div>

							
					</Col>
					<Col xs={12} md={4} lg={3} xl={3} className={classNames("mb-5")}>
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
