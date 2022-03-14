import classNames from "classnames";
import { Col } from "react-bootstrap";
import styles from "./GalleryHome.module.scss";

export default function GalleryHome() {
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
		<div className={classNames(styles.container)}>
			{images.map((d, i) => (
				<div
					key={i}
					className={classNames(styles.image, "mb-3")}
					style={{ backgroundImage: `url('${d.src}')` }}
				/>
			))}
		</div>
	);
}
