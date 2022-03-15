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
		<PageTemplate metaTitle={false}>
			<InteractiveLogo />
			<h4>
				The theme for VISAP’22 is “<span className={classNames("text-gradient")}>mingling spaces</span>”.
			</h4>
			<p>
				For 10 years the VIS Arts Program, and before this the VIS Arts Show,
				have represented a mingling space, a space “to bring or mix together or
				with something else, usually without fundamental loss of identity”
				[Merriam-Webster].<br/>VISAP’22 will take place in a hybrid format, and we
				will therefore experiment with different forms of mingling, attempting
				to bridge and mix not only disciplines, methodologies and techniques but
				also the virtual and the physical, the immaterial and the material;
				people and artifacts online and offline, remote and on-site. In line
				with this experiment, we invite submissions that explore, re-interpret,
				speculate and reflect on the idea of mingling spaces.
			</p>
			<h4 className={classNames("mt-5")}>Important Dates</h4>
			<Dates />
			<h4 className={classNames("mt-5")}>From VISAP'21</h4>
			<h6 className={classNames("mt-5")}>Exhibition</h6>
			<GalleryHome classNameProp="mt-3" />
			<h6 className={classNames("mt-5")}>Fast Forwards</h6>
			<ResponsiveVideo classNameProp="mt-3" url="https://www.youtube.com/watch?v=Tv1Anrwf8z4" />
		</PageTemplate>
	);
}
