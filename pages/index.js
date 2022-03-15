import styles from "../styles/Home.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import InteractiveLogo from "../components/InteractiveLogo";
import classNames from "classnames";
import GalleryHome from "../components/GalleryHome";
import ResponsiveVideo from "../components/ResponsiveVideo";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import Colophon from "../components/Colophon";
import Dates from "../components/Dates";

export default function Home() {
	return (
		<PageTemplate  metaTitle={false}>
			<Container fluid>
				<Row>
					<Col md={3}>
						<Colophon />
					</Col>
					<Col md={{ span: 6, offset: 0 }}>
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
							Show, have represented a mingling space, a space “to bring or mix
							together or with something else, usually without fundamental loss
							of identity” [Merriam-Webster]. VISAP’22 will take place in a
							hybrid format, and we will therefore experiment with different
							forms of mingling, attempting to bridge and mix not only
							disciplines, methodologies and techniques but also the virtual and
							the physical, the immaterial and the material; people and
							artifacts online and offline, remote and on-site. In line with
							this experiment, we invite submissions that explore, re-interpret,
							speculate and reflect on the idea of mingling spaces.
						</p>
					</Col>
				</Row>
				<Row className={styles.homeGallery}>
					<Col
						md={{ span: 8, offset: 3 }}
						className={classNames("pt-4", "pb-2")}
					>
						<GalleryHome />
					</Col>
				</Row>
				<Row>
					<Col md={{ span: 6, offset: 3 }}>
						<h4>Important Dates</h4>
						<Dates />
					</Col>
				</Row>
				<Row className={""}>
					<Col md={{ span: 6, offset: 3 }} className={classNames("py-4")}>
						<ResponsiveVideo url="https://www.youtube.com/watch?v=Tv1Anrwf8z4" />
					</Col>
				</Row>
			</Container>
		</PageTemplate>
	);
}
