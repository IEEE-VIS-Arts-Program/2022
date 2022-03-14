import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import visapLogo from "../images/logo-visap.png";
import InteractiveLogo from "../components/InteractiveLogo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import classNames from "classnames";
import GalleryHome from "../components/GalleryHome";

export default function Home() {
	return (
		<>
			<Head>
				<title>VISAP22</title>
				<meta name="description" content="The IEEE VIS Art Program forum." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className={styles.windowFrame}>
				<Container fluid>
					<Row>
						<Col md={2}>
							<div>
								<img className={classNames("img-fluid")} src={visapLogo.src} />
								<h6>
									The IEEE VIS 2022
									<br />
									Arts Program
								</h6>
								<p>
									Hybrid (on-site and virtual)
									<br />
									October 16-21, 2022
								</p>
							</div>
						</Col>
						<Col md={8}>
							<InteractiveLogo />
						</Col>
					</Row>
					<Row>
						<Col md={{ span: 6, offset: 3 }}>
							<h4>
								The theme for VISAP’22
								<br />
								is “mingling spaces.”
							</h4>
							<p>
								For 10 years the VIS Arts Program, and before this the VIS Arts
								Show, have represented a mingling space, a space “to bring or
								mix together or with something else, usually without fundamental
								loss of identity” [Merriam-Webster]. VISAP’22 will take place in
								a hybrid format, and we will therefore experiment with different
								forms of mingling, attempting to bridge and mix not only
								disciplines, methodologies and techniques but also the virtual
								and the physical, the immaterial and the material; people and
								artifacts online and offline, remote and on-site. In line with
								this experiment, we invite submissions that explore,
								re-interpret, speculate and reflect on the idea of mingling
								spaces.
							</p>
						</Col>
					</Row>
					<Row className={styles.homeGallery}>
						<Col
							md={{ span: 9, offset: 3 }}
							className={classNames("pt-4", "pb-2")}
						>
							<GalleryHome />
						</Col>
					</Row>
					<Row>
						<Col md={{ span: 6, offset: 3 }}>
							<h4>Important Dates</h4>
							<p>Submissions open by early April 2022.</p>
							<p>All submissions are due by June 2, 2022.</p>
							<p>Notifications of acceptance will be made by July 14, 2022.</p>
							<p>
								Final / Camera ready submissions are due by August 11, 2022.
							</p>
						</Col>
					</Row>
					<Row className={""}>
						<Col md={{ span: 9, offset: 3 }}>
							<iframe
								width="100%"
								height="56.25%"
								src="https://www.youtube.com/embed/Tv1Anrwf8z4"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
		</>
	);
}
