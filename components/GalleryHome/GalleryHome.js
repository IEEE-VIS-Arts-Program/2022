import classNames from "classnames";
import styles from "./GalleryHome.module.scss";
import captions from "./captions.json";

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
				<div key={i} className={classNames(styles.item)}>
					<div
						className={classNames(styles.image, "mb-3")}
						style={{ backgroundImage: `url("${d.src}")` }}
					/>
					<p className={classNames("small")}>[{i+1}] {captions[d.src]}</p>
				</div>
			))}
		</div>
	);
}
