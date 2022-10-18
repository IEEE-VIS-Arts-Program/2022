import classNames from "classnames";
import styles from "./GalleryHome.module.scss";
import captions from "./captions.json";
import { useRouter } from "next/router";

export default function GalleryHome({ classNameProp }) {
	const { basePath } = useRouter();
	const images = [];

	function importAll(r) {
		r.keys().forEach((key) => {
			images.push(r(key).default);
		});
		// console.log(images)
	}

	importAll(
		require.context(
			"../../public/images/home-gallery",
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
					<p className={classNames("small")} datacaption={d.src.replace(basePath, "")}>[{i+1}] {captions[d.src.replace(basePath, "")]}</p>
				</div>
			))}
		</div>
	);
}
