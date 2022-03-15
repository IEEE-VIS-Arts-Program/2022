import classNames from "classnames";
import { Col } from "react-bootstrap";
import styles from "./GalleryHome.module.scss";

export default function GalleryHome({ classNameProp }) {
	const images = [];

	function importAll(r) {
		r.keys().forEach((key) => {
			images.push(r(key).default);
		});
	}

	importAll(
		require.context(
			"../../images/home-gallery",
			true,
			/\.(png|gif|ico|jpg|jpeg)$/
		)
	);

	return (
		<div className={classNames(styles.container, classNameProp)}>
			{images.map((d, i) => (
				<div
					key={i}
					className={classNames(styles.image, "mb-3")}
					style={{ backgroundImage: `url('${d.src}')` }}
				/>
			))}
			<div className={classNames(styles.image)} style={{position:"relative"}}>
				<div style={{position:"absolute"}}>
					<p className={classNames(styles.credits, "mb-0")}>[1] FaceType: Expressing Our Spoken Expression (Kevin Maher, Fan Xiang, Liang Zhi)</p>
					<p className={classNames(styles.credits, "mb-0")}>[2] Spectrographies: Decomposition of Music into Light (Baltazar Pérez, Ilana Levin, Glacier's Lament)</p>
					<p className={classNames(styles.credits, "mb-0")}>[3] Jiabao Li Not Suitable for Breathing (Zhouyang Lu)</p>
					<p className={classNames(styles.credits, "mb-0")}>[4] Not Suitable for Breathing (Zhouyang Lu)</p>
					<p className={classNames(styles.credits, "mb-0")}>[5] Untitled Interspecies Umwelten (Joel Ong)</p>
					<a className={classNames(styles.credits, "mb-0")} href="https://visap.net/2021/gallery/">See more projects</a>
				</div>
			</div>
		</div>
	);
}
